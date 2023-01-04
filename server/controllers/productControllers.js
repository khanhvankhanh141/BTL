const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    sku,
    category,
    quantity,
    price,
    description,
    address,
    status,
    image,
  } = req.body;

  //Validation
  if (
    !name ||
    !sku ||
    !category ||
    !quantity ||
    !price ||
    !description ||
    !address ||
    !status
  ) {
    res.status(400);
    throw new Error("Please fill all in fields");
  }

  // Handle image
  let fileData = {};
  if (req.file) {
    fileData = {
      fileName: req.file.originalname,
      filepath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    };
  }

  // Create Product
  const product = await Product.create({
    user: req.user._id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
    address,
    status,
  });

  res.status(201).json(product);
});

module.exports = {
  createProduct,
};
