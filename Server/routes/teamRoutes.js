const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');

const {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember
} = require('../controllers/teamController');

// Create with image upload
router.post('/', upload.single('image'), createTeamMember);

// Read
router.get('/', getAllTeamMembers);
router.get('/:id', getTeamMemberById);

// Update (with optional image upload)
router.put('/:id', upload.single('image'), updateTeamMember);

// Delete
router.delete('/:id', deleteTeamMember);

module.exports = router;
