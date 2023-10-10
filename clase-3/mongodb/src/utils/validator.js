const User = require("../api/models/user.model")


const validateEmailDB = async (emailUser) => {
    try {
        const validateEmail = await User.findOne({ email: emailUser })
        console.log(validateEmail)
        return validateEmail;
    } catch (error) {
        console.log(error)
    }

}
module.exports = { validateEmailDB }