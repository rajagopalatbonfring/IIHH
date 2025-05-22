const mongoose = require('mongoose');

const facultyMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  specialty: { type: String, required: true },
  img: { type: String, required: true }
}, { timestamps: true });

const FacultyMember = mongoose.model('FacultyMember', facultyMemberSchema);
module.exports = FacultyMember;
