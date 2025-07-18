const server = require('./src/app.js');

server.listen(3003, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${3003}`);
});