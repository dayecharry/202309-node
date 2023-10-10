const mongoose = require("mongoose");
const url = 'mongodb+srv://ceciliaarangio:T8XcpFP5dGJYja8n@cluster0.4g316yu.mongodb.net/upgradehub?retryWrites=true&w=majority';
//const url = 'mongodb+srv://dayana:dayana@cluster0.uioyuaw.mongodb.net/test?retryWrites=true&w=majority'
const connectDb = async () => {
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const { name, host } = db.connection;
        console.log(`Nombre de la BD ${name} host : ${host}`)

    } catch (error) {
        console.log(error)
    }
}
module.exports = { connectDb }