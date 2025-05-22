const Testimonial = require('../models/testimonials');
const path = require('path');

// CREATE
const createTestimonial = async (req, res) => {
  try {
    const { name, desc, role, stars } = req.body;
    const imgPath = req.file ? `/Uploads/${req.file.filename}` : null;

    const newTestimonial = new Testimonial({
      img: imgPath,
      name,
      desc,
      role,
      stars
    });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create testimonial', error });
  }
};

// UPDATE
const updateTestimonial = async (req, res) => {
  try {
    const { name, desc, role, stars } = req.body;
    const imgPath = req.file ? `/Uploads/${req.file.filename}` : undefined;

    const updateFields = {
      name,
      desc,
      role,
      stars
    };

    if (imgPath) {
      updateFields.img = imgPath;
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Testimonial not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update testimonial', error });
  }
};


// READ ALL
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials', error });
  }
};

// READ ONE
const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonial', error });
  }
};


// DELETE
const deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Testimonial not found' });
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete testimonial', error });
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
};
