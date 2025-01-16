const nodemailer = require("nodemailer")

const { SMTP_HOST, SMTP_PORT, SMTP_PASS, SMTP_USER} = process.env;

const transport = nodemailer.createTransport({

    host: SMTP_HOST,
    port: parseInt(SMTP_PORT,10),
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    },
    debug: true
  });

  module.exports = transport