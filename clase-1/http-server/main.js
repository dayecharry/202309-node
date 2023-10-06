//http--> permite generar servidor HTTP
console.log('holissss');
const http = require('http');
const PORT = 5050;

//manejar peticiones hechas a nuestro servidor
const requestServer = (req, res) => {
  res.end('por el puerto 5000');
};

//creamos el servidor y le pasamos la funcion que maneja esa peticion
const server = http.createServer(requestServer);

server.listen(PORT, () => {
  console.log(`Server listen por el puerto :   localhost:${PORT}`);
});
