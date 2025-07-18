const { google } = require('googleapis');
const path = require('path');

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '../TestVocacional/google-credentials2.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = '1pFxCzBQQZiSpwKyDuCaaZ2DxAUMqtCmmbC-wGdI6Q5U';

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
      data.puntajeTotal || 0,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'A1',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: valores,
    },
  });
}

const vocacionController = async (input) => {
  const { nombre, apellido, correo, telefono, localidad, puntajeTotal } = input;

  if (!nombre || !apellido || !correo) {
    console.log("Faltan campos obligatorios");
    return false;
  }

  try {
    await guardarEnGoogleSheet({ nombre, apellido, correo, telefono, localidad, puntajeTotal });
    return true;
  } catch (err) {
    console.error("Error al guardar en Google Sheet:", err.message);
    return false;
  }
};

module.exports = vocacionController;
