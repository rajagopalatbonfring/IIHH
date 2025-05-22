const Faq = require('../models/faq');

// Create FAQ
const createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFaq = new Faq({ question, answer });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create FAQ', error });
  }
};

// Get all FAQs
const getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ createdAt: -1 });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch FAQs', error });
  }
};

// Get single FAQ by ID
const getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQ', error });
  }
};

// Update FAQ
const updateFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const updatedFaq = await Faq.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );
    if (!updatedFaq) return res.status(404).json({ message: 'FAQ not found' });
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(500).json({ message: 'Error updating FAQ', error });
  }
};

// Delete FAQ
const deleteFaq = async (req, res) => {
  try {
    const deleted = await Faq.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'FAQ not found' });
    res.status(200).json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting FAQ', error });
  }
};

module.exports = {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq
};
