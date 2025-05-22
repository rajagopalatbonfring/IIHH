const ProgramInfo = require("../models/programInfo");

const getProgramInfo = async (req, res) => {
  try {
    const info = await ProgramInfo.find();
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch program info" });
  }
};

const createProgramInfo = async (req, res) => {
  try {
    const { duration, format, startDates, tuition, certification, scholarshipInfo } = req.body;
    const newInfo = new ProgramInfo({ duration, format, startDates, tuition, certification, scholarshipInfo });
    await newInfo.save();
    res.status(201).json(newInfo);
  } catch (error) {
    res.status(400).json({ error: "Failed to create program info" });
  }
};

const updateProgramInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInfo = await ProgramInfo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedInfo);
  } catch (error) {
    res.status(400).json({ error: "Failed to update program info" });
  }
};

const deleteProgramInfo = async (req, res) => {
  try {
    const { id } = req.params;
    await ProgramInfo.findByIdAndDelete(id);
    res.json({ message: "Program info deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete program info" });
  }
};

module.exports = {
  getProgramInfo,
  createProgramInfo,
  updateProgramInfo,
  deleteProgramInfo,
};