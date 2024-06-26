const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user"] },

}, {
    collection: "user"
});
//string, number, array, date, mixed, boolean,  ObjectId

const User = mongoose.model("user", userSchema)
module.exports = User;