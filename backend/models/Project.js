const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // Residential, Commercial, Industrial, Government, Road Projects
  location: { type: String, required: true },
  timeline: { type: String },
  equipmentUsed: [{ type: String }],
  images: [{ type: String }], // Array of image URLs
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
