const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const requireAdminKey = require('../middleware/requireAdminKey');

router.post('/', contactController.submitContact);
router.get('/', requireAdminKey, contactController.getContacts);

module.exports = router;
