# Portfolio Backend

This repository contains a Node/Express backend and a React/Vite frontend for a modern portfolio.

**Status:**
- ✅ Frontend: Built and ready for GitHub Pages (in `/docs`)
- ✅ Backend: Ready to deploy to Render/Railway/Fly.io
- ✅ Contact form: Works locally; backend needs deployment for live email

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

## Deploy Frontend to GitHub Pages

Your React/Vite frontend is already built in `/docs` and ready for GitHub Pages.

**Steps:**

1. Push to GitHub (already done ✓)
   ```bash
   git add .
   git commit -m "Add docs for GitHub Pages deployment"
   git push
   ```

2. Enable GitHub Pages in your repo:
   - Go to **Settings** → **Pages**
   - Source: select **Deploy from a branch**
   - Branch: select **main**
   - Folder: select **/docs**
   - Click **Save**

3. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-backend`

**If you modify the frontend:**
   ```bash
   cd frontend
   npm run build    # Rebuilds to ../build
   # Then copy build contents to docs/ and git push
   ```

## Deploy Backend to Render / Railway / Fly.io

The contact form API needs a backend server. Pick one:

### Option A: Render (easiest)
1. Push your repo to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Set:
   - Build: `npm install`
   - Start: `npm start`
5. Get your backend URL (e.g., `https://your-app.onrender.com`)
6. Update frontend API calls to use this URL

### Option B: Railway
1. Go to https://railway.app
2. Connect GitHub repo
3. Railway auto-detects Node.js
4. Get your URL and update frontend

After deploying backend, update your frontend to call:
```javascript
const API_URL = 'https://your-backend-deployed.com/api'
// instead of localhost:4000
```

