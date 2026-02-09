const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const { handleContact } = require('../controllers/contactController');

const router = express.Router();

const dataDir = path.join(__dirname, '..', 'data');

router.get('/projects', async (req, res) => {
  try {
    const file = path.join(dataDir, 'projects.json');
    const raw = await fs.readFile(file, 'utf8');
    const projects = JSON.parse(raw);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load projects' });
  }
});

router.get('/skills', async (req, res) => {
  try {
    const file = path.join(dataDir, 'skills.json');
    const raw = await fs.readFile(file, 'utf8');
    const skills = JSON.parse(raw);
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load skills' });
  }
});

router.post('/contact', handleContact);

module.exports = router;
