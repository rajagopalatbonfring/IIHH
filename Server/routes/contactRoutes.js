const express = require("express");
const router = express.Router();

const {
  submitMessage,
  getMessages,
  markAsRead,
  deleteMessage,
} = require("../controllers/contactController");

router.post("/submit", submitMessage);
router.get("/", getMessages);
router.put("/:id/read", markAsRead);
router.delete("/:id", deleteMessage);

module.exports = router;