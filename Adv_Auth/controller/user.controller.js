const userModel = require("../model/user.model");
const { otpGeneratorfunction } = require("../utlis/otp");
const ejs = require("ejs");
const sendmail = require("../utlis/sendmail");
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Fill All The Fields......." });
  }
  try {
    const isUser = await userModel.findOne({ email });
    if (isUser) {
      return res.status(400).json({ message: "User Is Already Exsist....." });
    }
    const { otp, veficationToken } = otpGeneratorfunction({ name, email });
    const htmlTemplate = await ejs.renderFile(
      __dirname + "/../views/email.ejs",
      { otp, name }
    );
    await sendmail(email, htmlTemplate);
    res
      .cookie("verficationToken", veficationToken) // Cookie options for security
      .json({ message: "Email Sent Successfully...." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup };
