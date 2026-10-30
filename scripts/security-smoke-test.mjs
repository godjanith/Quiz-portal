const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const checks = [];
async function check(name, run, expected) {
  try {
    const response = await run();
    const ok = expected(response);
    checks.push({ name, status: ok ? 'PASS' : 'FAIL', detail: `HTTP ${response.status}` });
  } catch (error) {
    checks.push({ name, status: 'FAIL', detail: error instanceof Error ? error.message : String(error) });
  }
}
await check('Admin page is reachable (login page is expected)', () => fetch(`${base}/admin`, { redirect: 'manual' }), r => r.status === 200);
await check('Rejects non-JSON login requests', () => fetch(`${base}/api/admin/login`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=bad' }), r => r.status === 415);
await check('Rejects cross-origin login requests', () => fetch(`${base}/api/admin/login`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Origin': 'https://not-the-same-site.invalid' }, body: JSON.stringify({ password: 'invalid-test-password' }) }), r => r.status === 403);
await check('Rejects incorrect password', () => fetch(`${base}/api/admin/login`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Origin': new URL(base).origin }, body: JSON.stringify({ password: 'invalid-test-password' }) }), r => r.status === 401 || r.status === 503);
for (const row of checks) console.log(`${row.status.padEnd(4)} ${row.name} — ${row.detail}`);
if (checks.some(row => row.status === 'FAIL')) process.exitCode = 1;
