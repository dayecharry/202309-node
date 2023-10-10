const User = require("../models/user.model");
const { validateEmailDB } = require("../../utils/validator")


const register = async (req, res) => {
    try {

        const userBody = new User(req.body)
        const valEmail = await validateEmailDB(req.body.email)
        if (!valEmail) {
            const createduser = await userBody.save();
            return res.json({ message: "Agregado con exito", data: createduser })
        }
        return res.json({ message: "Email ya existe" })

    } catch (error) {

    }
}

module.exports = { register }