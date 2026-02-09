const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/health', (req, res) => res.json({ ok: true }));
router.post('/contact', contactController.postContact);
// dev-only: list stored messages
router.get('/messages', contactController.getMessages);

module.exports = router;
