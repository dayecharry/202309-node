const express = require('express');
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

//Para poder usar estos metodos necesitamos enrutar nuestro endpoint a los metodos.
const router = express.Router();
const routerUser = express.Router();
//router, contiene un conjunto de info de las rutas entre ellos los metodos (get, post, put, delete) CRUD --> crear, leer, modificar, eliminar

router.get('/movies', (req, res) => {
  res.send('este es el listado de las pelis');
});
router.get('/characters', (req, res) => {
  res.send('este es el listado de los personajes');
});

routerUser.get('/profile', (req, res) => {
  res.send('este es el perfil de usuario');
});

routerUser.post('/register', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'registrado con exito',
    data: req.body,
  });
});

app.use('/cine', router);
app.use('/users', routerUser);

//url --> parametros (forma de enviar datos al endpoint), metodos (get, put, delete, post)
const PORT = 5051;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
