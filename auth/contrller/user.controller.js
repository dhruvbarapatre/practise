const userModel = require("../model/user.Model")

const userCreate = async (req, res) => {
    const { name, email, password } = req.body
    try {
        await userModel.create({ name, email, password })
        res.status(200).json({ message: "user created suceesfully" })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong...", error })
    }
}

module.exports={userCreate}