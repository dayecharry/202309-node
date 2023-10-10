const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name: { type: String, require: true },
    username: { type: String, require: true },
    age: { type: Number }
}, {
    collection: "student"
});
//string, number, array, date, mixed, boolean,  ObjectId

const Student = mongoose.model("student", studentSchema)
module.exports = Student;