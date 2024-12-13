const express = require("express")
const jwt = require("jsonwebtoken")
const movieRoutes = express()
const dotenv = require("dotenv").config()

movieRoutes.get("/get", (req, res) => {
    const { UserToken } = req.cookies
    const moviesData = [
        { "name": "SpiderMan --- Ban Gaya Devotee.........." }
        , { "name": "Thor Dada........Jor Se gira......" }
    ]
    jwt.verify(UserToken, process.env.secret_key, (err, encoded) => {
        if (err) {
            return res.status(400).json({ message: "invalid Token......" })
        }
        res.status(200).json({ message: "User Data.....",data:moviesData })
    })
    res.send("ok")
})

module.exports = { movieRoutes }