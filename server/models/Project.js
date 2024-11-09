// models/Project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  githubLink: String,
  liveLink: String,
  imageURL: String,
  dateCompleted: Date,
  role: String,
  features: [String],
  tools: [String]
});

module.exports = mongoose.model("Project", projectSchema);
