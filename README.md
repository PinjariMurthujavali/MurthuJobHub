# MURTHU JOB HUB

Animated, responsive React + Vite frontend starter for an India-focused job discovery platform.

## Run locally
1. Install Node.js 20+.
2. Extract this ZIP.
3. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Build
```bash
npm run build
```
The production site is generated in `dist/`.

## Deploy to Netlify
1. Push this folder to a GitHub repository.
2. In Netlify choose **Add new site → Import an existing project**.
3. Connect GitHub and select the repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

`netlify.toml` already contains these settings and an SPA fallback.

## Current implementation status
This ZIP contains the working animated frontend shell: responsive navigation, search inputs, location/category filters, empty states, and a feedback UI. It intentionally does not invent job vacancies or claim any source feed is connected.

Not yet implemented/configured: live job-source integrations, scheduled revalidation, database, user authentication, resume storage, email alerts, admin operations, and server-backed feedback. These require a backend (for example Supabase), authorized job-source APIs/feeds, and secure environment configuration. The feedback form currently demonstrates the UI only and does not transmit data.

## Live-job integrity
Only show a job as verified after a successful, current check against an authorized source. Do not treat temporary network errors as proof that a job is closed. Preserve the original apply URL and source metadata.
