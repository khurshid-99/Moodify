const express = require("express");
const authController = require("../controllers/auth.controller");
const userIdentify = require("../middlewares/auth.middleware");

const authRoutes = express.Router();

authRoutes.post("/register", authController.registerController);
authRoutes.post("/login", authController.loginController);

authRoutes.get("/get-me", userIdentify, authController.getMeController);

authRoutes.get("/logout", userIdentify, authController.logoutControler);

module.exports = authRoutes;
