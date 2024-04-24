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

  const sendEmail = async (emailOptions, queryOptions) => {
    try {
      const info = await transport.sendMail(emailOptions);
      const query = await transport.sendMail(queryOptions);
      return "email enviado con exito"
    } catch (error) {
      console.error('Error al enviar correo electrónico:', error);
    }
  }
   // transport.sendMail(emailOptions, function (err, data) {
    //   if (err) {
    //     console.log("Error al enviar correo de información:", err);
    //   } else {
    //     console.log("Correo de información enviado con éxito");
    //   }
    // });

    // // Enviar correo de consulta
    // transport.sendMail(queryOptions, function (err, data) {
    //   if (err) {
    //     console.log("Error al enviar correo de consulta:", err);
    //   } else {
    //     console.log("Correo de consulta enviado con éxito");
    //   }
    // });

  module.exports = { transport, sendEmail} 