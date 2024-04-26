const nodemailer = require("nodemailer")

const { SMTP_HOST, SMTP_PORT, SMTP_PASS, SMTP_USER} = process.env;

const transport = nodemailer.createTransport({

    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  module.exports = transport