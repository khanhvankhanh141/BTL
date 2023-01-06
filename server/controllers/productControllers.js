const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;

const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description, address, status } =
    req.body;

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
    // Sace image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "BTL App",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Error uploading");
    }

    fileData = {
      fileName: req.file.originalname,
      filepath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
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
    image: fileData,
  });

  res.status(201).json(product);
});

module.exports = {
  createProduct,
};
