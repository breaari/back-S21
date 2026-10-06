const validarCarreraController = require("../controllers/validarCarreraController");

const validarCarreraHandler = async (req, res) => {
  try {
    const {
      respuestaUsuario,
      respuestaCorrecta,
      respuestasAceptadas = [],
    } = req.body;

    if (
      typeof respuestaUsuario !== "string" ||
      !respuestaUsuario.trim()
    ) {
      return res.status(400).json({
        error: "La respuesta del participante es obligatoria.",
      });
    }

    if (
      typeof respuestaCorrecta !== "string" ||
      !respuestaCorrecta.trim()
    ) {
      return res.status(400).json({
        error: "La carrera correcta es obligatoria.",
      });
    }

    const resultado = await validarCarreraController({
      respuestaUsuario: respuestaUsuario.trim(),
      respuestaCorrecta: respuestaCorrecta.trim(),
      respuestasAceptadas: Array.isArray(respuestasAceptadas)
        ? respuestasAceptadas
        : [],
    });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al validar carrera:", error);

    return res.status(500).json({
      error: "No se pudo validar la respuesta.",
      detalle: error.message,
    });
  }
};

module.exports = validarCarreraHandler;
