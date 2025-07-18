require("dotenv").config();
const transport  = require("../mail/transport");
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
  } =  await input;

  if (
    type === undefined ||
    program === undefined ||
    modality === undefined ||
    email === undefined ||
    name === undefined ||
    lastName === undefined ||
    whatsapp === undefined ||
    branch === undefined
  ) {
    console.log("Alguno de los campos de entrada es undefined:", input);
    return false;
  }
  
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

    const info =  transport.sendMail(emailOptions)
    const info2=  transport.sendMail(queryOptions)

   if (info && info2)

    return true
  } catch (error) {
    console.log("Error en el controlador emailController:", error.message);
    return false;
  }
};

module.exports = emailController;
