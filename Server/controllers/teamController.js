const Team = require('../models/teams');

// Create
const createTeamMember = async (req, res) => {
  try {
    const { name, role } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!image) return res.status(400).json({ message: 'Image is required' });

    const newMember = new Team({ name, role, image });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get all
const getAllTeamMembers = async (req, res) => {
  try {
    const members = await Team.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get by ID
const getTeamMemberById = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Not Found' });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Update
const updateTeamMember = async (req, res) => {
  try {
    const { name, role } = req.body;
    const updateData = { name, role };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updated = await Team.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updated) return res.status(404).json({ message: 'Team member not found' });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Delete
const deleteTeamMember = async (req, res) => {
  try {
    const deleted = await Team.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Team member not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember
};
