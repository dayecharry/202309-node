const Student = require("../models/student.model");

const newStudent = async (req, res) => {
    try {
        const body = req.body;
        const student = new Student(body);
        const createdStudent = await student.save();
        return res.json(createdStudent)
    } catch (error) {
        return res.json(error)
    }
}


module.exports = { newStudent }