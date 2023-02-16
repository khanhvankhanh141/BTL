const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const userController = {
  //Register User
  register: asyncHandler(async (req, res) => {
    const { name, email, password, role, phone, address } = req.body;

    //Validation
    if (!name || !email || !password || !role || !phone || !address) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }

    // check email is already exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role,
      phone,
      address,
      idPage: "",
    });

    //   Generate Token
    const token = generateToken(user._id);

    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    if (user) {
      const { _id, name, email, password, role, phone, address, idPage } = user;
      res.status(201).json({
        _id,
        name,
        email,
        password,
        role,
        phone,
        address,
        idPage,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }),

  //Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate Request
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add email and password");
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("PleaseUser not found, please signup");
    }

    // User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    //   Generate Token
    const token = generateToken(user._id);

    if (passwordIsCorrect) {
      // Send HTTP-only cookie
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
      });
    }
    if (user && passwordIsCorrect) {
      const { _id, name, email, phone } = user;
      res.status(200).json({
        msg: "Login sucessfully",
        _id,
        name,
        email,
        phone,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid email or password");
    }
  }),

  //Logout
  logout: asyncHandler(async (req, res) => {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
  }),

  //Get Admin User
  getUserAdmin: asyncHandler(async (req, res) => {
    const user = await User.find({ role: "admin" });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("Not user administrator");
    }
  }),

  //Get Agency User
  getUserAgency: asyncHandler(async (req, res) => {
    const user = await User.find({ role: "agency" });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("Not user Agency");
    }
  }),

  //Get Delivery User
  getUserDelivery: asyncHandler(async (req, res) => {
    const user = await User.find({ role: "delivery" });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("Not user Delivery");
    }
  }),

  //Get Factory User
  getUserFactory: asyncHandler(async (req, res) => {
    const user = await User.find({ role: "factory" });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("Not user Factory");
    }
  }),

  //Get All User
  getAllUsers: asyncHandler(async (req, res) => {
    const user = await User.find().sort("-createdAt");
    res.status(200).json(user);
  }),

  //Delete User
  delete: asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.json({ msg: "User not found" });
    }
    await user.remove();
    res.status(200).json({ msg: "User deleted", delete: true });
  }),

  //Login Status

  //Update User

  //Change Password

  //Forgot Password

  //Reset Password
};

module.exports = userController;
