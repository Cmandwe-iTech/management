const express = require('express');
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const app = express()
app.use(express.json())
const bodyparser = require('body-parser');
const router = require("./routes/details");
const { mongo } = require('mongoose');
mongoose.connect("mongodb://localhost:27017/StudentData", ()=>{
    console.log("connected to db")
})

app.use("/",router)
app.listen(8080,()=>{
    console.log("server is on 8080")
})