const path = require('path');
const fs = require('fs').promises;
const nodemailer = require('nodemailer');

const dataDir = path.join(__dirname, '..', 'data');

async function saveMessage(payload) {
  const file = path.join(dataDir, 'messages.json');
  try {
    const raw = await fs.readFile(file, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push({ ...payload, receivedAt: new Date().toISOString() });
    await fs.writeFile(file, JSON.stringify(arr, null, 2), 'utf8');
  } catch (err) {
    // if file doesn't exist, create it
    await fs.writeFile(file, JSON.stringify([ { ...payload, receivedAt: new Date().toISOString() } ], null, 2), 'utf8');
  }
}

async function trySendEmail(payload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) return false;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  const info = await transporter.sendMail({
    from: SMTP_USER,
    to: CONTACT_TO,
    subject: `Portfolio message from ${payload.name} <${payload.email}>`,
    text: payload.message
  });
  return info;
}

exports.handleContact = async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  const payload = { name, email, message };

  try {
    const emailResult = await trySendEmail(payload);
    await saveMessage(payload);
    return res.json({ success: true, emailed: !!emailResult });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ error: 'Failed to process contact' });
  }
};
