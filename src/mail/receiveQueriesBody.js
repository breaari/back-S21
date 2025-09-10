const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

const receiveQueriesBody = async (type, program, equivalency, modality, name, lastName, whatsapp, branch, email) => {

  console.log("ohla estoy funcionando")
  try {

    console.log("ohla estoy funcionando 2")

    const hasEquivalencies = equivalency ? 'sí' : 'no';
    
    const body = `
      <h1>Hola! Recibiste una nueva consulta de ${name} ${lastName}! </h1>
      <p>Tipo de programa: ${type}</p>
      <p>Carrera: ${program}</p>
      <p>Equivalencias: ${hasEquivalencies}</p>
      <p>Modalidad: ${modality}</p>
      <p>WhatsApp: ${whatsapp}</p>
      <p>Email: ${email}</p>
      <p>Localidad: ${branch}</p>
      <h2>¡Saludos!</h2>
    `;

    console.log("ohla estoy funcionando 4")
    return body;
  } catch (error) {
    console.error('Error al generar el cuerpo del correo:', error);
    console.log("no estoy funcionando")
    
  }
};

module.exports = receiveQueriesBody;
