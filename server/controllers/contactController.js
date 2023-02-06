const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const contactUs = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(400);
    throw new Error("User not found, Please signup");
  }

  // Validation
  if (!subject || !message) {
    res.status(400);
    throw new Error("Please add subject and message");
  }
});

module.exports = {
  contactUs,
};
