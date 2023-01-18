const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const protected = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");

router.post("/createproduct", protected, upload.single("image"), createProduct);
router.get("/", protected, getAllProduct);
router.get("/:id", protected, getProduct);
router.delete("/:id", protected, deleteProduct);

module.exports = router;
