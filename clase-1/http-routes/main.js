//http--> permite generar servidor HTTP
console.log('holissss');
const http = require('http');
const PORT = 5050;

//manejar peticiones hechas a nuestro servidor
const requestServer = (req, res) => {
  const url = req.url;
  if (url === '/') {
    res.end('por el puerto 5000');
  } else if (url === '/user') {
    res.end('datos del usuario');
  } else if (url === '/products') {
    res.end('datos de los productos');
  }
};

//creamos el servidor y le pasamos la funcion que maneja esa peticion
const server = http.createServer(requestServer);

server.listen(PORT, () => {
  console.log(`Server listen por el puerto :   localhost:${PORT}`);
});
