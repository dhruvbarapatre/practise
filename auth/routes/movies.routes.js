const express = require("express")

const movieRoutes = express()

movieRoutes.get("/get", () => {
    res.send(req.cookies)
})