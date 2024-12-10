const mongoose = require("mongoose");
const dotenv = require("dotenv").config()


const connection = mongoose.connect(process.env.db_url)

module.exports=connection