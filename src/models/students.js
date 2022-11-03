const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name : {
    type : String,
    minlength : 3
  },
  email : {
    type : String,
    unique : true

  },
  phone : {
    type : Number,
    min : 10
  },
  address : {
    type : String
  }
});
const Student = new mongoose.model('mern', studentSchema);

module.exports = Student;
