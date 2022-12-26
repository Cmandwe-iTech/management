const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class:{type: Number, required:true},
    myClassId:{type: String}
})

const classdata = mongoose.model("classdata", classSchema);

module.exports = classdata;