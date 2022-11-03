
const mongoose = require('mongoose');
const express = require('express');
require("./db/conn");
const Student = require("./models/students");
const app = express();
app.use(express.json());
const port = process.env.PORT ||3000

const studentRouter = require("./routers/student");

// creat a rest full api
app.use(studentRouter)



app.listen(port , ()=>{
  console.log(`connection succesfull at port ${port}`)
});
