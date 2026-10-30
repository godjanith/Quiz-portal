import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { adminCookieName, createSessionToken } from '@/lib/auth';

// Best-effort process-local throttling. Serverless instances may not share memory;
// use a shared rate-limit store for a strong global limit in a public production app.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function sameSecret(received: string, expected: string) {
  const a = Buffer.from(received, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
function clientKey(request: NextRequest) {
  // Vercel supplies x-forwarded-for. Only the first address is used for this
  // best-effort guard; never treat this process-local limiter as a global WAF.
  return (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim().slice(0, 80);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (origin && host) {
    try { if (new URL(origin).host !== host) return NextResponse.json({ error: 'Request origin is not allowed.' }, { status: 403, headers: { 'Cache-Control': 'no-store' } }); }
    catch { return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403, headers: { 'Cache-Control': 'no-store' } }); }
  }
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return NextResponse.json({ error: 'Content-Type must be application/json.' }, { status: 415, headers: { 'Cache-Control': 'no-store' } });
  }

  const now = Date.now();
  const key = clientKey(request);
  const entry = attempts.get(key);
  if (entry && entry.resetAt > now && entry.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many login attempts. Please wait 15 minutes and try again.' }, { status: 429, headers: { 'Cache-Control': 'no-store', 'Retry-After': String(Math.ceil((entry.resetAt - now) / 1000)) } });
  }

  let body: { password?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400, headers: { 'Cache-Control': 'no-store' } }); }
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return NextResponse.json({ error: 'Admin login is not configured. Set ADMIN_PASSWORD in Vercel environment variables.' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });

  if (typeof body.password !== 'string' || !sameSecret(body.password, expected)) {
    const current = attempts.get(key);
    if (!current || current.resetAt <= now) attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    else current.count += 1;
    // Bound memory use in long-lived development instances.
    if (attempts.size > 2000) for (const [k, v] of attempts) if (v.resetAt <= now) attempts.delete(k);
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });
  }

  attempts.delete(key);
  try {
    const response = NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    response.cookies.set(adminCookieName, createSessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/', maxAge: 60 * 60 * 8 });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Could not create session.' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}
