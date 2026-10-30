import { cookies } from 'next/headers';
import { isValidToken, adminCookieName } from '@/lib/auth';
import AdminPanel from '@/components/AdminPanel';
export const dynamic = 'force-dynamic';
export default async function AdminPage() {
  const jar = await cookies();
  const authorized = isValidToken(jar.get(adminCookieName)?.value);
  return <AdminPanel initiallyAuthorized={authorized} />;
}
