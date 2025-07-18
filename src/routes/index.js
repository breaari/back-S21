const { Router } = require('express');
const { sendEmailHandler } = require("../handlers/sendEmailHandler");
const { carrerasHandler } = require('../handlers/carrerasHandler');
const { sendTestResultsHandler } = require('../handlers/sendTestResultsHandler');
const { vocacionHandler } = require('../handlers/vocacionHandler');

const router = Router();

router.post("/", sendEmailHandler);
router.get("/", carrerasHandler);
router.post("/send-test-results", sendTestResultsHandler)
router.post("/send-vocacion-results", vocacionHandler)

module.exports = router;