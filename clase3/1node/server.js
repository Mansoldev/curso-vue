// Cargar el modulo HTTP
var http = require("http");

// Creamos un servidor a la escucha en el puerto 8888, que responde a cada petición con un hola mundo
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8888);