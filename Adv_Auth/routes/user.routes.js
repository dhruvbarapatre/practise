const express = require("express");
const { signup } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/signUp",signup);

module.exports = userRouter;
