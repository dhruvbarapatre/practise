const express = require("express")

const movieRoutes = express()

movieRoutes.get("/get", (req,res) => {
    res.send(req.cookies)
})

module.exports={movieRoutes}