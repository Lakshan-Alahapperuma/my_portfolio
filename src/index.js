const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const apiRouter = require('../routes/api');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

// serve simple demo frontend during development
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use('/frontend', express.static(frontendPath));

// optional: serve frontend build if present
const staticPath = path.join(__dirname, '..', 'build');
app.use(express.static(staticPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  // if a frontend build exists, serve index.html (avoid throwing when missing)
  const indexFile = path.join(staticPath, 'index.html');
  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile, (err) => {
      if (err) {
        console.error('Error sending index.html from build:', err);
        return res.status(500).end();
      }
    });
  }

  // fall back to included demo frontend if present
  const demoIndex = path.join(frontendPath, 'index.html');
  if (fs.existsSync(demoIndex)) return res.sendFile(demoIndex);

  return res.status(404).json({ message: 'Not Found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});
