const mongoose = require("mongoose");

const startDateSchema = new mongoose.Schema({
  startDate: { type: String, required: true },
  applicationDeadline: { type: String, required: true },
});

const programInfoSchema = new mongoose.Schema({
  duration: { type: String, required: true },
  format: { type: String, required: true },
  startDates: [startDateSchema],
  tuition: { type: String, required: true },
  certification: { type: String },
  scholarshipInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("ProgramInfo", programInfoSchema);