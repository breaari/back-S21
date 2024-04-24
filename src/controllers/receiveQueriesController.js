//const { form } = require("../DB_conection");
require("dotenv").config();
const transport = require("../mail/transport");
const receiveQueriesBody = require("../mail/receiveQueriesBody");
const { SMTP_USER } = process.env;


const receiveQueriesController = async (input) => {
console.log("req", input)
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

  const bodyQuery = await receiveQueriesBody( type, program, equivalency, modality, name, lastName, whatsapp, branch);
  
  try {

    let mailOptions = {
      from: SMTP_USER,
      to: SMTP_USER,
      subject: "Nueva consulta",
      html: bodyQuery,
    };

    transport.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    transport.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully");
      }
    });

    return true;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = receiveQueriesController;