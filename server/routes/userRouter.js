const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protected = require("../middleWare/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/getadmin", protected, userController.getUserAdmin);
router.get("/getagency", protected, userController.getUserAgency);
router.get("/getdelivery", protected, userController.getUserDelivery);
router.get("/getfactory", protected, userController.getUserFactory);
router.get("/getall", protected, userController.getAllUsers);
router.delete("/delete/:id", protected, userController.delete);

module.exports = router;
