// const nodemailer = require("nodemailer")

// const { SMTP_HOST, SMTP_PORT, SMTP_PASS, SMTP_USER} = process.env;

// const transport = nodemailer.createTransport({

//     host: SMTP_HOST,
//     port: parseInt(SMTP_PORT,10),
//     secure: true,
//     auth: {
//       user: SMTP_USER,
//       pass: SMTP_PASS
//     },
//     debug: true
//   });

//   module.exports = transport

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "c1942171.ferozo.com",
  port: 465,
  secure: true,
  auth: {
    user: "infocarreras@universidadsiglo21online.com",
    pass: "Pulsion21*"
  },
  debug: true
});

module.exports = transport;




