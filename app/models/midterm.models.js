const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    major: String
},{
    timestamps: true
});
//creates a collection of particular db of mongodb
//return the mongoose obj
module.exports = mongoose.model('student', StudentSchema);
