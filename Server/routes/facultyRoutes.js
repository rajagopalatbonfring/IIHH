const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads'); // Import multer middleware
const {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
} = require('../controllers/facultyController');


// Routes with multer and auth middleware
router.post('/', upload.single('img'), createFaculty);
router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.put('/:id', upload.single('img'), updateFaculty);
router.delete('/:id', deleteFaculty);

module.exports = router;