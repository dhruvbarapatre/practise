const express = require("express")
const connection = require("./config/db")

const app = express()
const dotenv = require("dotenv").config()

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected TO DB......")
    } catch (error) {
        console.log(error)
    }
})