const express = require('express');
const router = express.Router();
const festivalController = require("../controllers/festivalController");

router.get("/festivals", festivalController.getFestivals)
router.get("/festivals/:month", festivalController.getFestivalsByMonth);

module.exports = router;