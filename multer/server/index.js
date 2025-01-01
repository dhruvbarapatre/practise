const express = require("express")
const upload = require("./config/multer")
const cors = require("cors")
const { connection, imageModel } = require("./db")

const app = express()
app.use(cors())
app.use(express.static("./upload"))
app.post("/upload", upload.single("file"), async (req, res) => {
    
    try {
        const responses=await imageModel.create({ image: req.file.filename }) 
        res.status(200).json({message:"Image Set Succesfully"})
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
})

app.get("/images", (req, res) => {


    res.send("ok")
})

app.all("*", (req, res) => {
    res.send("This Route Is not Exsist")
})
app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected To DB")
    } catch (error) {
        res.status(500).json({ message: "Error in Connect DB" })
    }
})