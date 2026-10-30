# SpeedSphere 3D — Vercel-only edition

A Next.js + TypeScript quiz website for Time, Speed & Distance. This edition uses a static question bank and does not require a database.

## Features

- Topic filtering, randomized questions, immediate feedback, explanations, and score review.
- Premium dark landing page with dynamic topic cards, real question counts, Explore → Practice → Improve → Master steps, and a clear quiz call to action.
- Homepage stats use the existing question bank and browser-local personal best; no fake live or global statistics.
- Responsive layouts for mobile, tablet, and desktop; reduced-motion preference support.
- Local leaderboard and performance analytics based on quiz attempts saved in the current browser's `localStorage`.
- Owner login using an HTTP-only signed session cookie.
- Owner question editor supports importing/exporting JSON. Because Vercel's deployment filesystem is not a persistent writable store, editing does **not** directly publish changes; edit `lib/questions.ts` and redeploy to publish question-bank changes.
- Admin login adds JSON-only requests, same-origin checks when an Origin header is present, constant-time comparison for same-length password strings, and a best-effort process-local throttle.

## Important storage limitation

Leaderboard entries and analytics are local to a browser/device and can be cleared or edited by that browser's owner. They are not a trusted global ranking and cannot be used to validate competition results. A shared leaderboard, central analytics, or durable question editing requires a database or a persistent storage service plus server-side validation.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `ADMIN_PASSWORD` and `SESSION_SECRET` in `.env.local`. Use a strong, unique admin password and a random `SESSION_SECRET` of at least 32 characters. Do not commit `.env.local` or production secrets.

## Production environment variables

Set these in Vercel Project Settings → Environment Variables for Production (and Preview only if you want admin access there):

- `ADMIN_PASSWORD`: a long, unique owner password.
- `SESSION_SECRET`: random secret, at least 32 characters; use a different value from the admin password.

Redeploy after changing environment variables. The admin session expires after 8 hours.

## Security smoke checks

Start the app locally, then in a second terminal run:

```bash
npm run security
```

To test another deployment, set `BASE_URL` to the deployment URL. These are basic smoke tests, not a penetration test. The in-memory login throttle is best-effort only: Vercel may run multiple independent serverless instances, so a robust global rate limit requires shared storage or a managed firewall/rate-limiting service.

## Build

```bash
npm run build
```

The question bank is in `lib/questions.ts`. Make source changes, commit them to GitHub, and let Vercel deploy the connected repository.
