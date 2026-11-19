const QuoteRequest = require('../models/QuoteRequest');

exports.submitQuote = async (req, res) => {
  try {
    // Only accept known fields, so clients cannot set server-managed ones like `status`.
    const { name, phone, email, location, projectType, budget, timeline, message, documentUrl } = req.body || {};
    const newQuote = new QuoteRequest({
      name, phone, email, location, projectType, budget, timeline, message, documentUrl,
    });
    await newQuote.save();
    res.status(201).json({ success: true, message: 'Quote request submitted successfully!' });
  } catch (error) {
    if (error.name === 'ValidationError' || error.name === 'CastError') {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }
    console.error('Error saving quote request:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: quotes });
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
