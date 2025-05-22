const express = require("express");
const router = express.Router();
const programInfoController = require("../controllers/programInfoController");

router.get("/", programInfoController.getProgramInfo);
router.post("/", programInfoController.createProgramInfo);
router.put("/:id", programInfoController.updateProgramInfo);
router.delete("/:id", programInfoController.deleteProgramInfo);

module.exports = router;