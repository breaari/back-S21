const carrerasController = require("../controllers/carrerasController");

const carrerasHandler = async (req, res) => {
  try {
    const carreras = carrerasController.getCarreras();
    res.status(200).json(carreras);
  } catch (error) {
    console.error('Error al obtener las carreras:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = { carrerasHandler };

