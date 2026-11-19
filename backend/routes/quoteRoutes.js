const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const requireAdminKey = require('../middleware/requireAdminKey');

router.post('/', quoteController.submitQuote);
router.get('/', requireAdminKey, quoteController.getQuotes);

module.exports = router;
