const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productControllers");
const protected = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");

router.post("/createproduct", protected, upload.single("image"), createProduct);

module.exports = router;
