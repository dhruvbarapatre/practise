const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const otpGeneratorfunction = ({ email, name, password }) => {
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const user = {
    email,
    name,
    password,
  };
  const token = jwt.sign({ otp, user }, process.env.secret_key);
  return { otp, veficationToken: token };
};

const result = otpGeneratorfunction({
  name: "Dhruv",
  email: "bar@gmail.com",
  password: "454455454545",
});

console.log(result);

module.exports = { otpGeneratorfunction };
