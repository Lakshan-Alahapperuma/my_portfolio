# Portfolio Backend

This repository contains a minimal Node/Express backend and a small static frontend demo for a portfolio.

Features

- `POST /api/contact` — accepts contact form submissions. If SMTP is configured via environment variables the message is emailed; otherwise messages are stored in `src/data/messages.json`.
- `GET /api/health` — basic health check.
- `GET /api/messages` — developer endpoint to list saved messages.

Quick start

1. Install dependencies

```bash
cd portfolio-backend
npm install
```

2. (Optional) Create a `.env` with SMTP settings to enable sending emails

```
PORT=4000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
CONTACT_TO=your.email@example.com
```

3. Run in development

```bash
npm run dev
```

4. Open the demo frontend

Browse to `http://localhost:4000/frontend/index.html` to see the static demo contact form, or host the `frontend` folder in any static server.

Notes

- The server serves static assets from a `build` folder if present; the included `frontend` folder is a simple static example.
- For production, build a frontend into a `build` folder or serve static assets from a CDN.

