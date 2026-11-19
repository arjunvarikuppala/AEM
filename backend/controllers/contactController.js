const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    // Only accept known fields; ignore anything else the client sends.
    const { name, email, phone, message } = req.body || {};
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    if (error.name === 'ValidationError' || error.name === 'CastError') {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
