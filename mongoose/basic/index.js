const mongoose = require("mongoose")

const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/newdb")
        await StudentModel.insertMany([{name:"Dhruv",age:18,city:"Surat"},{name:"Dhruv",age:18,city:"Surat"}])
    } catch (error) {
        console.log(error)
    }
}

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})
const StudentModel = mongoose.model("Student", studentSchema);

main()