const express = require("express")

const userRouter = express.Router()

userRouter.post("/create", (req,res) => {
    res.send("ok")
})

module.exports = { userRouter }
