const express = require("express");
const fs = require("fs");
const app = express();

// Logger Middleware


// Use the Logger Middleware
app.use((req, res, next) => {
    fs.appendFile("./hi.txt", ` \n ${req.method} ${req.url}`, (err)=>{
        if(err){
            res.send(err)
        }else{
            res.send("success")
        }
    });
    next(); // Pass control to the next middleware or route handler
});

app.get("/", (req, res) => {
    res.send("ok");
});

app.get("/home", (req, res) => {
    res.send("ok");
});

app.get("/hi", (req, res) => {
    console.log("first");
    res.send("ok");
});

app.listen(8000, () => {
    console.log("Port Is Running");
});
