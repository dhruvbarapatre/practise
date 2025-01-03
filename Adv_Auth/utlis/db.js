const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connection = mongoose.connect(process.env.mongo_db_url);

module.exports = { connection };
