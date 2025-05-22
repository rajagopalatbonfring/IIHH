const ContactMessage = require("../models/contactMessage");

// Submit a contact message
const submitMessage = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Submit contact message error:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages", error });
  }
};

// Mark a message as read
const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await ContactMessage.findByIdAndUpdate(id, { isRead: true });
    res.status(200).json({ message: "Marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update message", error });
  }
};

// Delete a message
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await ContactMessage.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete message", error });
  }
};

module.exports = {
  submitMessage,
  getMessages,
  markAsRead,
  deleteMessage,
};
