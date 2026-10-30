import { createHmac, timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'speedsphere_admin';
function secret() { return process.env.SESSION_SECRET || ''; }
function signature(payload: string) { return createHmac('sha256', secret()).update(payload).digest('hex'); }
export function createSessionToken() {
  if (!secret() || secret().length < 32) throw new Error('SESSION_SECRET must be at least 32 characters.');
  const payload = `${Date.now() + 8 * 60 * 60 * 1000}`;
  return `${payload}.${signature(payload)}`;
}
export function isValidToken(token?: string) {
  if (!token || !secret() || secret().length < 32) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [expires, sig] = parts;
  if (!expires || !sig || !/^\d+$/.test(expires) || Number(expires) < Date.now()) return false;
  const expected = signature(expires);
  try { return timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex')); } catch { return false; }
}
export function isAdminRequest(request: NextRequest) { return isValidToken(request.cookies.get(COOKIE_NAME)?.value); }
export const adminCookieName = COOKIE_NAME;
