const express = require("express")
const connection = require("./config/db")
const { userRouter } = require("./routes/user.routes")
var cookieParser = require('cookie-parser')

const app = express()
const dotenv = require("dotenv").config()
app.use(cookieParser())
app.use(express.json())
app.use("/user",userRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected TO DB......")
    } catch (error) {
        console.log(error)
    }
})