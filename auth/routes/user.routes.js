const express = require("express")
const userModel = require("../model/user.Model")
const { userCreate } = require("../contrller/user.controller")

const userRouter = express.Router()

userRouter.post("/create",userCreate)

module.exports = { userRouter }
