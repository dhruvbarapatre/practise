const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/imageDB")

const imageSchema = new mongoose.Schema({
    image: String
})

const imageModel = mongoose.model('imageModel', imageSchema)
module.exports = { connection, imageModel }