const express = require('express');
const app = express();

app.use('/pelis', (req, res) => {
  res.send('este es el listado de pelis');
});

app.use('/usuarios', (req, res) => {
  res.send('este es el listado de usuarios');
});

app.use('/', (req, res) => {
  res.send('este es HOME');
});

//url --> parametros (forma de enviar datos al endpoint), metodos (get, put, delete, post)
const PORT = 5051;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});
