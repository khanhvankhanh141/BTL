const express = require("express");
const router = express.Router();
const { contactUs } = require("../controllers/contactController");
const protected = require("../middleWare/authMiddleware");

module.exports = router;
