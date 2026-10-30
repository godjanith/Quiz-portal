import { NextRequest, NextResponse } from 'next/server';
import { adminCookieName, createSessionToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  let body: { password?: string };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return NextResponse.json({ error: 'Admin login is not configured. Set ADMIN_PASSWORD in Vercel environment variables.' }, { status: 503 });
  if (typeof body.password !== 'string' || body.password !== expected) return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  try {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookieName, createSessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/', maxAge: 60 * 60 * 8 });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Could not create session.' }, { status: 500 });
  }
}
