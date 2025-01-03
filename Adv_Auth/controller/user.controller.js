const userModel = require("../model/user.model");

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
    await userModel.create({ name, email, password });
    res.send("user created success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup };
