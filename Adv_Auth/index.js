const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./utlis/db");
const userRouter = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.set("view engine", "ejs");

app.get("/email", (req, res) => {
  res.render("email");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
});
