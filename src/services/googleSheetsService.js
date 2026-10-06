const { google } = require("googleapis");
const path = require("path");

const credentialsPath = path.join(
  __dirname,
  "../../google-sheets-credentials.json",
);

const auth = new google.auth.GoogleAuth({
  keyFile: credentialsPath,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const SPREADSHEET_ID =
  process.env.RULETA_SHEET_ID;

const SHEET_NAME =
  process.env.RULETA_SHEET_NAME ||
  "Participantes";

const guardarParticipanteEnSheet = async (
  participante,
) => {
  if (!SPREADSHEET_ID) {
    throw new Error(
      "Falta RULETA_SHEET_ID",
    );
  }

  const ahora = new Date();

  const fecha = ahora.toLocaleDateString(
    "es-AR",
    {
      timeZone: "America/Argentina/Buenos_Aires",
    },
  );

  const hora = ahora.toLocaleTimeString(
    "es-AR",
    {
      timeZone: "America/Argentina/Buenos_Aires",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  );

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,

    range: `${SHEET_NAME}!A:G`,

    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [
        [
          fecha,
          hora,
          participante.nombre,
          participante.apellido,
          participante.correo,
          participante.telefono,
          participante.localidad,
        ],
      ],
    },
  });
};

module.exports = {
  guardarParticipanteEnSheet,
};