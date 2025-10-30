const { Router } = require('express');
const { sendEmailHandler } = require("../handlers/sendEmailHandler");
const { carrerasHandler } = require('../handlers/carrerasHandler');
const { sendTestResultsHandler } = require('../handlers/sendTestResultsHandler');
const { vocacionHandler } = require('../handlers/vocacionHandler');
const { secundariaHandler } = require('../handlers/secundariaHandler');

const router = Router();

router.post("/", sendEmailHandler);
router.get("/", carrerasHandler);
router.post("/send-test-results", sendTestResultsHandler)
router.post("/send-vocacion-results", vocacionHandler)
router.post("/send-secundaria-results", secundariaHandler)

module.exports = router;