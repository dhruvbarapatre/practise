const express = require("express")
const mongoose = require("mongoose")
const { connection, userModel } = require("./db")

const app = express()

app.use(express.json())

app.post("/users", async (req, res) => {
    try {
        const { name, email, age } = req.body
        await userModel.create({ name, email, age })
        res.send("Data Added Successfully")
    } catch (error) {
        res.send(error)
    }
})

app.get("/users", async (req, res) => {
    try {
        const data = await userModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.get("/users/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById(id)
        user ?res.send(user):res.send("User not Found......")
    } catch (error) {
        console.log(error)
        res.send("User Not Found......")
    }
})

app.patch("/users/:id", async (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body
    try {
        await userModel.findByIdAndUpdate(id,
            { name, email, age })
        res.send("Data Updated SuccesFully")
    } catch (error) {
        console.log(error)
    }
    res.send("ok")
})

app.delete("/users/:id", async (req, res) => {
    const { id } = req.params
    try {
        await userModel.findByIdAndDelete(id)
        res.send("Data Deleted Succesfully")
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000, async () => {
    try {
        await connection
        console.log("Server Is runnig")
    } catch (error) {
        console.log(error)
    }
})