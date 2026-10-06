const {
  crearParticipante,
  obtenerSiguienteParticipante,
  iniciarParticipante,
  finalizarParticipante,
} = require(
  "../controllers/ruletaQRController",
);

const {
  guardarParticipanteEnSheet,
} = require(
  "../services/googleSheetsService",
);
/* =========================================================
   PARTICIPAR
========================================================= */

const participarRuletaQRHandler = async (
  req,
  res,
) => {
  try {
    const participante =
      crearParticipante(req.body);
await guardarParticipanteEnSheet(
  participante,
);
    return res.status(201).json({
      ok: true,
      mensaje:
        "Participante registrado correctamente",
      participante: {
        id: participante.id,
        nombre: participante.nombre,
      },
    });
  } catch (error) {
    console.error(
      "Error en participarRuletaQRHandler:",
      error.message,
    );

    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

/* =========================================================
   SIGUIENTE PARTICIPANTE
========================================================= */

const siguienteRuletaQRHandler = (
  req,
  res,
) => {
  try {
    const resultado =
      obtenerSiguienteParticipante();

    return res.status(200).json({
      ok: true,
      ...resultado,
    });
  } catch (error) {
    console.error(
      "Error en siguienteRuletaQRHandler:",
      error.message,
    );

    return res.status(500).json({
      ok: false,
      error: "Error interno del servidor",
    });
  }
};

/* =========================================================
   INICIAR
========================================================= */

const iniciarRuletaQRHandler = (
  req,
  res,
) => {
  try {
    const participante =
      iniciarParticipante(req.params.id);

    return res.status(200).json({
      ok: true,
      participante,
    });
  } catch (error) {
    console.error(
      "Error en iniciarRuletaQRHandler:",
      error.message,
    );

    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

/* =========================================================
   FINALIZAR
========================================================= */

const finalizarRuletaQRHandler = (
  req,
  res,
) => {
  try {
    const participante =
      finalizarParticipante(req.params.id);

    return res.status(200).json({
      ok: true,
      participante,
    });
  } catch (error) {
    console.error(
      "Error en finalizarRuletaQRHandler:",
      error.message,
    );

    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = {
  participarRuletaQRHandler,
  siguienteRuletaQRHandler,
  iniciarRuletaQRHandler,
  finalizarRuletaQRHandler,
};