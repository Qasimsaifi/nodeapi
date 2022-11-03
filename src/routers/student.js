const express = require('express');
const router = new express.Router();
const Student = require("../models/students");
router.get("/check", (req, res) => {
  res.send('router page')
})
router.post("/student" , async(req,res)=>{
 try {
const user = new Student(req.body);
const creatuser = await user.save();
res.status(201).send(creatuser);
console.log(creatuser)

 } catch (e) {
  res.status(400).send(e)
  console.log(e)
 }
})

router.get("/student", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.send(studentData);
  } catch (e) {
    res.send(e)
  }
})

router.get("/student/:id", async (req , res) => {
try {
  const _id = req.params.id;
  const studentsData = await  Student.findById(_id);
  if (! studentsData) {
   return  res.status(404).send()
  }else{
  res.send(studentsData)
 
  }
} catch (e) {
  res.status(500).send(e)
}  
})

router.delete("/student/:id", async (req , res) => {
try {
  const _id = req.params.id;
  const studentsData = await  Student.findByIdAndDelete(_id);
  if (! studentsData) {
   return  res.status(404).send()
  }else{
  res.send(studentsData)
 
  }
} catch (e) {
  res.status(500).send(e)
}  
})
router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentsData = await Student.findByIdAndUpdate(_id , req.body);
    if (!studentsData) {
      return res.status(404).send()
    } else {
      res.status(200).send(studentsData)

    }
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;
