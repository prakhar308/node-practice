const express = require('express');
const router = express.Router();
const slipsController = require("../controllers/slipsController");

router.get("/slips", slipsController.getSlips);
router.post("/insertSlip", slipsController.insertSlip);
router.put("/updateSlip/:number", slipsController.updateSlip);

module.exports = router;