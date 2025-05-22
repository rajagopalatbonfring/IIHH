const FacultyMember = require('../models/facultyMember');
const path = require('path');
const fs = require('fs').promises; // For file deletion

// Create faculty with image
const createFaculty = async (req, res) => {
  try {
    const { name, role, specialty } = req.body;
    // Validate required fields
    if (!name || !role || !specialty) {
      return res.status(400).json({ error: 'Name, role, and specialty are required' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const img = `/uploads/${req.file.filename}`;
    const newFaculty = new FacultyMember({ name, role, specialty, img });
    const saved = await newFaculty.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating faculty:', err);
    return res.status(500).json({ error: err.message });
  }
};

// Get all faculty members
const getAllFaculty = async (req, res) => {
  try {
    const faculty = await FacultyMember.find();
    res.status(200).json(faculty);
  } catch (err) {
    console.error('Error fetching faculty:', err);
    return res.status(500).json({ error: err.message });
  }
};

// Get a single faculty member by ID
const getFacultyById = async (req, res) => {
  try {
    const faculty = await FacultyMember.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
    res.status(200).json(faculty);
  } catch (err) {
    console.error('Error fetching faculty by ID:', err);
    return res.status(500).json({ error: err.message });
  }
};

// Update faculty with optional new image
const updateFaculty = async (req, res) => {
  try {
    const { name, role, specialty } = req.body;
    const updates = {};

    // Only update fields that are provided
    if (name) updates.name = name;
    if (role) updates.role = role;
    if (specialty) updates.specialty = specialty;

    if (req.file) {
      // Delete old image if it exists
      const faculty = await FacultyMember.findById(req.params.id);
      if (faculty && faculty.img) {
        try {
          await fs.unlink(path.join(__dirname, '..', faculty.img));
        } catch (err) {
          console.error('Failed to delete old image:', err);
        }
      }
      updates.img = `/Uploads/${req.file.filename}`;
    }

    const updated = await FacultyMember.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Faculty not found' });
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating faculty:', err);
    return res.status(500).json({ error: err.message });
  }
};

// Delete a faculty member by ID
const deleteFaculty = async (req, res) => {
  try {
    const faculty = await FacultyMember.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

    // Delete image if it exists
    if (faculty.img) {
      try {
        await fs.unlink(path.join(__dirname, '..', faculty.img));
      } catch (err) {
        console.error('Failed to delete image:', err);
      }
    }

    await faculty.deleteOne();
    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (err) {
    console.error('Error deleting faculty:', err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
};