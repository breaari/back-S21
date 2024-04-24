const server = require('./src/app.js');
const { DB_PORT } = process.env || 3000

server.listen(DB_PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${DB_PORT}`);
});