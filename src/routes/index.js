const { Router } = require('express');
const { sendEmailHandler } = require("../handlers/sendEmailHandler");
const { carrerasHandler } = require('../handlers/carrerasHandler');
const { receiveQueriesHandler } = require("../handlers/receiveQueriesHandler")

const router = Router();

// Configurar los routers
router.post("/", sendEmailHandler);
router.post("/queries", receiveQueriesHandler)
router.get("/", carrerasHandler);

module.exports = router;