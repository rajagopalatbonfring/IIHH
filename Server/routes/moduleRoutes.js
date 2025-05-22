const express = require("express");
const {
  createModule,
  getAllModules,
  getModuleById,
  updateModule,
  deleteModule,
  getFeaturedModules,
} = require("../controllers/moduleController.js") ;

const router = express.Router();

// Create
router.post("/", createModule);

// Read
router.get("/featured", getFeaturedModules);
router.get("/", getAllModules);
router.get("/:id", getModuleById);



// Update
router.put("/:id", updateModule);

// Delete
router.delete("/:id", deleteModule);

module.exports = router;