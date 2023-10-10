const express = require('express');
const { connectDb } = require("./src/utils/database");
const routerStudent = require("./src/api/routes/student.routes");
const routerProject = require("./src/api/routes/project.routes");
const routesUser = require("./src/api/routes/user.routes")
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

connectDb();

app.use("/student", routerStudent);
app.use("/project", routerProject);
app.use("/user", routesUser)

const PORT = 5051;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
