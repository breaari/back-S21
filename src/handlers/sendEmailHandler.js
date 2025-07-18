const emailController = require("../controllers/sendEmailController");

const sendEmailHandler = async (req, res) => {
  const input = req.body;
  try {
    const result = await emailController(input);
    
    if (result) {
      return res.send("Correo enviado exitosamente");
    } else {
      return res.status(404).send("Error al enviar el correo");
    }
  } catch (error) {
    console.error("Error en sendEmailHandler:", error);
    return res.status(500).send("Error interno del servidor:", error);
  }
};

module.exports = { sendEmailHandler };
