// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const { DB_PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// const form = require('./models/form')

// //  const sequelize = new Sequelize(
// //    `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
// //   { logging: false, native: false }
// // );

// // const DB_USER="l0030640_DB_S21" 
// // const DB_PASSWORD="voMA33leso"
// // const DB_HOST="localhost"
// // const DB_NAME="l0030640_DB_S21"
// // // Crear una instancia de Sequelize para conectarse a MySQL
// // const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
// //   host: DB_HOST,
// //   dialect: 'mysql', // Usar el dialecto 'mysql' para MySQL
// //   logging: false // Deshabilitar el logging de consultas SQL en la consola
// // });

// const sequelize = new Sequelize( DB_PORT || 3000, { logging: false, native: false }
// );

// form(sequelize);

// module.exports = {
//     ...sequelize.models,
//     conn: sequelize,
//   };