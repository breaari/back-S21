const {
  registrarParticipante,
  iniciarJuego,
  finalizarJuego,
} = require("../controllers/memotestController");

/* =========================================================
   REGISTRAR
========================================================= */

const registrarMemotestHandler = async (
  req,
  res,
) => {
  try {
    const resultado =
      await registrarParticipante(req.body);

    /*
     * Participante existente.
     */
    if (resultado.existente) {
      const { participante } = resultado;

      if (participante.estado === "FINALIZADO") {
        return res.status(409).json({
          ok: false,
          yaParticipo: true,
          mensaje:
            "Ya participaste de este desafío.",
          participante,
        });
      }

      /*
       * Si comenzó pero no terminó, permitimos
       * recuperar esa misma participación.
       */
      return res.status(200).json({
        ok: true,
        recuperado: true,
        participante,
      });
    }

    return res.status(201).json({
      ok: true,
      participante: {
        id: resultado.participante.id,
        nombre: resultado.participante.nombre,
      },
    });
  } catch (error) {
    console.error(
      "Error registrar memotest:",
      error,
    );

    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

/* =========================================================
   INICIAR
========================================================= */

const iniciarMemotestHandler = async (
  req,
  res,
) => {
  try {
    const resultado = await iniciarJuego(
      req.params.id,
    );

    return res.status(200).json({
      ok: true,
      ...resultado,
    });
  } catch (error) {
    console.error(
      "Error iniciar memotest:",
      error,
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

const finalizarMemotestHandler = async (
  req,
  res,
) => {
  try {
    const participante =
      await finalizarJuego(
        req.params.id,
        req.body,
      );

    return res.status(200).json({
      ok: true,
      participante,
    });
  } catch (error) {
    console.error(
      "Error finalizar memotest:",
      error,
    );

    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = {
  registrarMemotestHandler,
  iniciarMemotestHandler,
  finalizarMemotestHandler,
};