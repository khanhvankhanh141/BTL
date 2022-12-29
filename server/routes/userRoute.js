const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getAllUsers,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
} = require("../controllers/userController");
const protected = require("../middleWare/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getuser", protected, getUser);
router.get("/getusers", getAllUsers);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protected, updateUser);
router.patch("/changepassword", protected, changePassword);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
