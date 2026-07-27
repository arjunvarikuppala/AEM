const mongoose = require('mongoose');

const quoteRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  projectType: { type: String, required: true },
  budget: { type: String },
  timeline: { type: String },
  message: { type: String },
  documentUrl: { type: String }, // For uploaded documents
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' } // Pending, Reviewed, Contacted
});

module.exports = mongoose.model('QuoteRequest', quoteRequestSchema);
