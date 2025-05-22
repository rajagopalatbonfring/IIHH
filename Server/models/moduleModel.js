const mongoose =  require("mongoose");

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  objective: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // e.g., "fa-seedling"
  color: { type: String, required: true }, // e.g., "green"
  topics: { type: [String], required: true },
  outcomes: { type: [String], required: true },
  quote: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

const ProgramModule = mongoose.model("programModule", moduleSchema);

module.exports = ProgramModule;
