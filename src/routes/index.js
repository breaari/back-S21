const { Router } = require('express');
const { sendEmailHandler } = require("../handlers/sendEmailHandler");
const { carrerasHandler } = require('../handlers/carrerasHandler');
const { sendTestResultsHandler } = require('../handlers/sendTestResultsHandler');

const router = Router();

router.post("/", sendEmailHandler);
router.get("/", carrerasHandler);
router.post("/send-test-results", sendTestResultsHandler)

module.exports = router;