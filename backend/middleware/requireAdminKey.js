// Protects routes that return stored customer data (names, emails, phones).
// Requests must send the key from ADMIN_API_KEY in the "x-admin-key" header.
// If ADMIN_API_KEY is not configured, access is denied (fail closed).
const crypto = require('crypto');

module.exports = function requireAdminKey(req, res, next) {
  const expected = process.env.ADMIN_API_KEY;
  const provided = req.get('x-admin-key');

  if (!expected || typeof provided !== 'string') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  next();
};
