// const Module = require("../models/moduleModel.js");

// // Create a new module
// const createModule = async (req, res) => {
//   try {
//     const newModule = new Module(req.body);
//     const savedModule = await newModule.save();
//     res.status(201).json(savedModule);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to create module", error });
//   }
// };

// // Get all modules
// const getAllModules = async (req, res) => {
//   try {
//     const modules = await Module.find().sort({ createdAt: -1 });
//     res.status(200).json(modules);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch modules", error });
//   }
// };

// // Get a single module by ID
// const getModuleById = async (req, res) => {
//   try {
//     const module = await Module.findById(req.params.id);
//     if (!module) return res.status(404).json({ message: "Module not found" });
//     res.status(200).json(module);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch module", error });
//   }
// };

// // Update a module by ID
// const updateModule = async (req, res) => {
//   try {
//     const updatedModule = await Module.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!updatedModule) return res.status(404).json({ message: "Module not found" });
//     res.status(200).json(updatedModule);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to update module", error });
//   }
// };

// // Delete a module by ID
// const deleteModule = async (req, res) => {
//   try {
//     const deletedModule = await Module.findByIdAndDelete(req.params.id);
//     if (!deletedModule) return res.status(404).json({ message: "Module not found" });
//     res.status(200).json({ message: "Module deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete module", error });
//   }
// };


// module.exports = {
//   createModule,
//   getAllModules,
//   getModuleById,
//   updateModule,
//   deleteModule,
// };

const Module = require("../models/moduleModel.js");

// Create a new module
const createModule = async (req, res) => {
  try {
    if (req.body.isFeatured) {
      const featuredCount = await Module.countDocuments({ isFeatured: true });
      if (featuredCount >= 3) {
        return res.status(400).json({ message: "Only 3 modules can be featured at a time" });
      }
    }

    console.log(req.body);

    const newModule = new Module(req.body);
    const savedModule = await newModule.save();
    res.status(201).json(savedModule);
  } catch (error) {
    res.status(400).json({ message: "Failed to create module", error });
  }
};

// Get all modules
const getAllModules = async (req, res) => {
  try {
    const modules = await Module.find().sort({ createdAt: -1 });
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch modules", error });
  }
};

// Get a single module by ID
const getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    if (!module) return res.status(404).json({ message: "Module not found" });
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch module", error });
  }
};

// Update a module by ID
const updateModule = async (req, res) => {
  try {
    // If marking this module as featured
    if (req.body.isFeatured) {
      const existingModule = await Module.findById(req.params.id);
      const featuredCount = await Module.countDocuments({ isFeatured: true });

      if (!existingModule.isFeatured && featuredCount >= 3) {
        return res.status(400).json({ message: "Only 3 modules can be featured at a time" });
      }
    }

    const updatedModule = await Module.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedModule) return res.status(404).json({ message: "Module not found" });
    res.status(200).json(updatedModule);
  } catch (error) {
    res.status(400).json({ message: "Failed to update module", error });
  }
};

// Delete a module by ID
const deleteModule = async (req, res) => {
  try {
    const deletedModule = await Module.findByIdAndDelete(req.params.id);
    if (!deletedModule) return res.status(404).json({ message: "Module not found" });
    res.status(200).json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete module", error });
  }
};

// Get only featured modules (limit to 3)
const getFeaturedModules = async (req, res) => {
  try {
    const featuredModules = await Module.find({ isFeatured: true }).limit(3);
    console.log(featuredModules);
    res.status(200).json(featuredModules);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch featured modules", error });
  }
};

module.exports = {
  createModule,
  getAllModules,
  getModuleById,
  updateModule,
  deleteModule,
  getFeaturedModules,
};
