const Project = require("../models/project.model")

const addProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const createdProject = await newProject.save();

        return res.status(200).json({ message: "proyecto creado", data: createdProject })

    } catch (error) {

    }
}
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        return res.status(200).json(projects)
    } catch (error) {

    }
}
module.exports = { addProject, getProjects }