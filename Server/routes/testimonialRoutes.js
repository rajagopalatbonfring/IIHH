const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');
const {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');

// CREATE
router.post('/', upload.single('img'), createTestimonial);

// READ ALL
router.get('/', getAllTestimonials);

// READ ONE
router.get('/:id', getTestimonialById);

// UPDATE
router.put('/:id', upload.single('img'), updateTestimonial);

// DELETE
router.delete('/:id', deleteTestimonial);

module.exports = router;
