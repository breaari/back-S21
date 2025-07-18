const sendTestResultsController = require("../controllers/sendTestResultsController");

const sendTestResultsHandler = async (req, res) => {
  const input = req.body;

  try {
    const result = await sendTestResultsController(input);
    if (result) {
      return res.send("Resultados enviados exitosamente");
    } else {
      return res.status(400).send("Error al enviar resultados");
    }
  } catch (error) {
    console.error("Error en sendTestResultsHandler:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = { sendTestResultsHandler };
