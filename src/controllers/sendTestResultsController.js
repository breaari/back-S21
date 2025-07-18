const dimensiones = require("../TestVocacional/data.json");
const transport = require("../mail/transport");
const sendTestResultsBody = require("../mail/sendTestResultsBody");
const { SMTP_USER } = process.env;
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Ruta al archivo JSON de la cuenta de servicio
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '../TestVocacional/google-credentials.json'), // ⚠️ Cambiá según tu ruta
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// ID de la hoja de cálculo (lo sacás de la URL de tu Google Sheet)
const SHEET_ID = '1lLI7cGdeefpdu7-0YmxDrx-SN-lQjdyEL4immNtOnx8';

async function guardarEnGoogleSheet(data) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const fecha = new Date().toLocaleString('es-AR');

  const valores = [
    [
      data.nombre,
      data.apellido,
      data.correo,
      data.telefono,
      data.localidad,
      fecha,
      JSON.stringify(data.resultados),
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'A1', // Asume que empieza desde la A1
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: valores,
    },
  });
}


function calcularPromedio(arr) {
  const validNumbers = arr.filter((n) => typeof n === "number" && !isNaN(n));
  if (validNumbers.length === 0) return 0;
  const suma = validNumbers.reduce((acc, val) => acc + val, 0);
  return Math.round((suma / validNumbers.length) * 20); // ej: escala 1-5 a 0-100%
}

const sendTestResultsController = async (input) => {
  const { nombre, apellido, correo, respuestas } = input;

  if (!nombre || !correo || !respuestas || typeof respuestas !== "object") {
    console.log("Faltan datos para enviar resultados del test", input);
    return false;
  }

  try {
    let puntero = 0;
    const resultados = [];

    for (const dim of dimensiones) {
        const respuestasDim = respuestas[dim.dimension] || [];
        const porcentaje = calcularPromedio(respuestasDim);
      
        const textoFinal = dim.texto_resultado.replace("{{}}", porcentaje);
      
        resultados.push({
          dimension: dim.dimension,
          porcentaje,
          texto: textoFinal,
          carreras: dim.carreras,
        });
      }
      

    const htmlBody = sendTestResultsBody(nombre, apellido, resultados);

    const mailOptions = {
      from: SMTP_USER,
      to: correo,
      subject: "Resultados de tu test vocacional UES21",
      html: htmlBody,
    };

    await transport.sendMail(mailOptions);

    // await guardarEnGoogleSheet({
    //   nombre,
    //   apellido,
    //   correo,
    //   telefono: input.telefono,
    //   localidad: input.localidad,
    //   resultados,
    // });
    
    // 1. Ordenar de mayor a menor por porcentaje
const resultadosOrdenados = [...resultados].sort((a, b) => b.porcentaje - a.porcentaje);

// 2. Tomar el resultado con mayor porcentaje
const dimensionPrincipal = resultadosOrdenados[0];

// 3. Obtener la primera carrera (si existe)
const carreraSugerida = dimensionPrincipal.carreras?.[0] || "Sin carrera sugerida";

// 4. Guardar en la hoja de cálculo
await guardarEnGoogleSheet({
  nombre,
  apellido,
  correo,
  telefono: input.telefono,
  localidad: input.localidad,
  resultados: carreraSugerida,
});


    return true;
  } catch (error) {
    console.log("Error en sendTestResultsController:", error.message);
    return false;
  }
};

module.exports = sendTestResultsController;
