const express = require("express")
const { newStudent } = require("../controllers/student.controller")

const router = express.Router()

router.post("/register", newStudent)


module.exports = router