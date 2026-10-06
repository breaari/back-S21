const { Router } = require("express");

const { sendEmailHandler } = require("../handlers/sendEmailHandler");
const { carrerasHandler } = require("../handlers/carrerasHandler");
const { sendTestResultsHandler } = require("../handlers/sendTestResultsHandler");
const { vocacionHandler } = require("../handlers/vocacionHandler");
const { secundariaHandler } = require("../handlers/secundariaHandler");

const validarCarreraHandler = require("../handlers/validarCarreraHandler");
const {
  participarRuletaQRHandler,
  siguienteRuletaQRHandler,
  iniciarRuletaQRHandler,
  finalizarRuletaQRHandler,
} = require("../handlers/ruletaQRHandler");

const {
  registrarMemotestHandler,
  iniciarMemotestHandler,
  finalizarMemotestHandler,
} = require("../handlers/memotestHandler");

const router = Router();

router.post("/", sendEmailHandler);
router.get("/", carrerasHandler);
router.post("/send-test-results", sendTestResultsHandler);
router.post("/send-vocacion-results", vocacionHandler);
router.post("/send-secundaria-results", secundariaHandler);
router.post("/validar-carrera", validarCarreraHandler);
router.post(
  "/ruleta-qr/participar",
  participarRuletaQRHandler,
);

router.get(
  "/ruleta-qr/siguiente",
  siguienteRuletaQRHandler,
);

router.post(
  "/ruleta-qr/:id/iniciar",
  iniciarRuletaQRHandler,
);

router.post(
  "/ruleta-qr/:id/finalizar",
  finalizarRuletaQRHandler,
);

router.post(
  "/memotest/participar",
  registrarMemotestHandler,
);

router.post(
  "/memotest/:id/iniciar",
  iniciarMemotestHandler,
);

router.post(
  "/memotest/:id/finalizar",
  finalizarMemotestHandler,
);

module.exports = router;