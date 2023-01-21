const express = require("express");
const {
  signupController,
  loginController,
  getprofile,
} = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signup", signupController);
userRoute.post("/login", loginController);
userRoute.get("/", getprofile);
module.exports = { userRoute };
