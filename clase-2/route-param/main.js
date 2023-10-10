const express = require('express');
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

const routerStudents = express.Router();

routerStudents.get("/studentprofile/:id", (req, res) => {
  const idStudent = req.params.id // 123456
  res.json({
    msg: "perfil de usario",
    data: idStudent
  })
})

routerStudents.post("/studentRegister", (req, res) => {
  const body = req.body;
  // mandarlo a una BD 
  res.json({
    data: body
  })
})

app.use("/", routerStudents)
//url --> parametros (forma de enviar datos al endpoint), metodos (get, put, delete, post)
const PORT = 5051;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
