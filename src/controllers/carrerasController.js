const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

const getCarreras = () => {
  try {
    const rawdata = fs.readFileSync(jsonPath);
    const carreras = JSON.parse(rawdata);
    console.log("carreras")
    return carreras;
  } catch (error) {
    console.error('Error al obtener las carreras:', error);
    throw new Error('Error interno del servidor');
  }
};

module.exports = { getCarreras };

