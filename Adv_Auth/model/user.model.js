const monggose = require("mongoose");

const userschema = new monggose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      uniqued: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = monggose.model("users", userschema);

module.exports = userModel;
