const QuoteRequest = require('../models/QuoteRequest');

exports.submitQuote = async (req, res) => {
  try {
    const newQuote = new QuoteRequest(req.body);
    await newQuote.save();
    res.status(201).json({ success: true, message: 'Quote request submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error', details: error.message });
  }
};

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: quotes });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
