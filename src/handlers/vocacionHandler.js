const vocacionController = require("../controllers/vocacionController");

const vocacionHandler = async (req, res) => {
  const input = req.body;

  try {
    const ok = await vocacionController(input);
    if (ok) {
      return res.status(200).send("Contacto guardado correctamente");
    } else {
      return res.status(400).send("Error al guardar el contacto");
    }
  } catch (err) {
    console.error("Error en vocacionHandler:", err.message);
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = { vocacionHandler };
