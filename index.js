const server = require('./src/app.js');
// const { DB_PORT } = process.env || 3000

server.listen(3000, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${3000}`);
});