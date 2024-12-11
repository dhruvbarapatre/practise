const userModel = require("../model/user.Model")
const bcrypt = require("bcrypt")

const userCreate = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400).json({ message: "Fill All the Field...", })
    }
    try {
        const findEmail = await userModel.findOne({ email })
        if (!findEmail) {
            try {
                bcrypt.hash(password, 5, async (err, hash) => {
                    if (err) {
                        res.status(200).json({ message: "Eroor In Creating Password", err })
                    }
                    if (hash) {
                        await userModel.create({ name, email, password: hash })
                        res.status(200).json({ message: "user created suceesfully" })
                    }
                })
            } catch (error) {
                res.status(400).json({ message: "Something went wrong...", error })
            }
        } else if (findEmail) {
            res.status(400).json({ message: "You Can not use email twice...." })
        }

    } catch (error) {
        res.status(400).json({ message: "An Erorr occured", error })
    }

}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "Fill All Fields..." })
    }
    try {
        const findEmail = await userModel.findOne({ email })
        if (!findEmail) {
            res.status(400).json({ message: "User Not Found...." })
        }
        bcrypt.compare(password, findEmail.password, (err, result) => {
            if (err) {
                res.status(400).json({ message: "Error In Hashing Password...", err })
            }
            if (result) {
                res.status(200).json({ message: "Login Succesfully..." })
            } else if (!result) {
                res.status(400).json({ message: "Wrong Password..." })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}

module.exports = { userCreate, userLogin }