const { google } = require('googleapis');
const path = require('path');

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '../TestVocacional/google-credentials3.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = '1yOTvUMYnziXTpK7LS4KF9Pg-bT5VsszQW__pUm7FRkQ';

async function guardarEnGoogleSheet(data) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const fecha = new Date().toLocaleString('es-AR');

  const valores = [[
    data.nombre,
    data.apellido,
    data.correo,
    data.telefono,
    data.localidad,
    fecha,
    data.carreras,
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'A1',
    valueInputOption: 'USER_ENTERED',
    resource: { values: valores },
  });
}

const secundariaController = async (input) => {
  const { nombre, apellido, correo, telefono, localidad, carreras } = input;

  if (!nombre || !correo) {
    console.log("⚠️ Faltan campos obligatorios");
    return false;
  }

  try {
    await guardarEnGoogleSheet({ nombre, apellido, correo, telefono, localidad, carreras });
    return true;
  } catch (err) {
    console.error("Error al guardar en Google Sheet:", err.message);
    return false;
  }
};

module.exports = secundariaController;
