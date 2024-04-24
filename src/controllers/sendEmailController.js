const { form } = require("../DB_conection");
require("dotenv").config();
const {transport, sendEmail} = require("../mail/transport");
const sendEmailBody = require("../mail/sendEmailBody");
const receiveQueriesBody = require("../mail/receiveQueriesBody");
const { SMTP_USER } = process.env;

const emailController = async (input) => {
  
  const {
    type,
    program,
    equivalency,
    modality,
    email,
    name,
    lastName,
    whatsapp,
    branch,
  } = input;
  
  try {
    // Enviar correo
    const body = await sendEmailBody(program, name, lastName);
    const emailOptions = {
      from: SMTP_USER,
      to: email,
      subject: program,
      html: body,
    };

    // Recibir consulta
    const queryBody = await receiveQueriesBody(type, program, equivalency, modality, name, lastName, whatsapp, branch);
    const queryOptions = {
      from: SMTP_USER,
      to: SMTP_USER,
      subject: "Nueva consulta",
      html: queryBody,
    };

    // Verificar el transporte (SMTP) antes de enviar correos
    transport.verify(function (error, success) {
      if (error) {
        console.log("Error al verificar el transporte:", error);
      } else {
        console.log("Transporte listo para enviar mensajes");
      }
    });

    const emailSent = await sendEmail(emailOptions, queryOptions);

    if (emailSent) {
      console.log('Correo enviado con éxito');
      return true;
    } else {
      console.log('Error al enviar el correo');
      return false;
    }

    // Enviar correo de información
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

    //return true// Indicar que ambas acciones se realizaron correctamente
  } catch (error) {
    console.log("Error en el controlador emailController:", error.message);
    return false; // Indicar que ocurrió un error al realizar alguna acción
  }
};

module.exports = emailController;
