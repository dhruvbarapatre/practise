const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/dhruv")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
},{
    versionKey:false
})

const userModel = mongoose.model("user", userSchema)

module.exports = { userModel, connection }