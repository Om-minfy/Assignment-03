const express = require('express');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.get('/api/secret-quote', authenticateToken, (req, res) => {
  res.json({ quote: "The secret to getting ahead is getting started." });
});

module.exports = router;