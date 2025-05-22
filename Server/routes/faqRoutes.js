const express = require('express');
const router = express.Router();
const {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq
} = require('../controllers/faqController');

// Create
router.post('/', createFaq);

// Read all
router.get('/', getAllFaqs);

// Read one
router.get('/:id', getFaqById);

// Update
router.put('/:id', updateFaq);

// Delete
router.delete('/:id', deleteFaq);

module.exports = router;
