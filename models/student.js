const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{type: String, required: true},
    StudentId:{type: Number},
    student_count:{type: Number}
})

const student = mongoose.model("student", studentSchema);

module.exports = student;