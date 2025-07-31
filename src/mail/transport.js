const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "c1942171.ferozo.com",
  port: 465,
  secure: true,
  auth: {
    user: "infocarreras@universidadsiglo21online.com",
    pass: "Pulsion21*"
  },
  debug: true,
  logger: true,
});

module.exports = transport;




