const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("PLease fill in a required field");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }
  // Check email exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User has already been registed");
  }
  // Create new user
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    const { _id, name, email } = user;
    res.status(201).json({
      _id,
      name,
      email,
    });
  } else {
    res.statusCode(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
  registerUser,
};
