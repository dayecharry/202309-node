const express = require("express")
const router = express.Router();
const { addProject, getProjects } = require("../controllers/project.controller")

router.post("/", addProject)
router.get("/", getProjects)

module.exports = router;