const express = require("express")
const { userCreate, userLogin } = require("../contrller/user.controller")

const userRouter = express.Router()

userRouter.post("/create",userCreate)

userRouter.post("/login",userLogin)

module.exports = { userRouter }
