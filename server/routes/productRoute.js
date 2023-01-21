const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers");
const protected = require("../middleWare/authMiddleware");
const { upload } = require("../utils/fileUpload");

router.post("/createproduct", protected, upload.single("image"), createProduct);
router.get("/", protected, getAllProduct);
router.get("/:id", protected, getProduct);
router.delete("/:id", protected, deleteProduct);
router.patch("/:id", protected, upload.single("image"), updateProduct);

module.exports = router;
