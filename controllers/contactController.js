const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs-extra');
const { contactSchema } = require('../utils/validate');

const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'messages.json');

async function saveMessageLocally(message) {
  await fs.ensureFile(DATA_FILE);
  const arr = (await fs.readJson(DATA_FILE).catch(() => []));
  arr.push({ ...message, receivedAt: new Date().toISOString() });
  await fs.writeJson(DATA_FILE, arr, { spaces: 2 });
}

async function sendEmail(message) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) return false;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const info = await transporter.sendMail({
    from: `${message.name} <${message.email}>`,
    to: CONTACT_TO,
    subject: message.subject || 'Portfolio contact form',
    text: `${message.message}\n\nFrom: ${message.name} <${message.email}>`
  });
  return info && info.messageId;
}

exports.postContact = async (req, res) => {
  try {
    const { error, value } = contactSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });

    // try to send email if env configured, otherwise save locally
    const emailSent = await sendEmail(value).catch(() => false);
    if (!emailSent) await saveMessageLocally(value);

    return res.json({ success: true, emailSent: !!emailSent });
  } catch (err) {
    console.error('postContact error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    await fs.ensureFile(DATA_FILE);
    const arr = (await fs.readJson(DATA_FILE).catch(() => []));
    return res.json(arr);
  } catch (err) {
    console.error('getMessages error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
