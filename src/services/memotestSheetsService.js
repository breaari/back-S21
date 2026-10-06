const { google } = require("googleapis");
const path = require("path");

const credentialsPath = path.join(
  __dirname,
  "../../google-sheets-credentials.json",
);

const auth = new google.auth.GoogleAuth({
  keyFile: credentialsPath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const SPREADSHEET_ID = process.env.RULETA_SHEET_ID;

const SHEET_NAME =
  process.env.MEMOTEST_SHEET_NAME || "Memotest Maraton";

const HEADERS = [
  "Fecha",
  "Hora",
  "ID",
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Estudios universitarios",
  "Interes formacion",
  "Areas",
  "Tipo formacion",
  "Origen",
  "Estado",
  "Inicio juego",
  "Fin juego",
  "Tiempo ms",
  "Tiempo segundos",
  "Movimientos",
  "Ganador",
  "Codigo premio",
  "Participa sorteo",
  "Canjeado",
];

/* =========================================================
   NORMALIZACIÓN
========================================================= */

const normalizarEmail = (email = "") =>
  email.trim().toLowerCase();

const normalizarTelefono = (telefono = "") =>
  telefono.replace(/\D/g, "").replace(/^549/, "").replace(/^54/, "");

/* =========================================================
   ASEGURAR HOJA
========================================================= */

const asegurarHoja = async () => {
  if (!SPREADSHEET_ID) {
    throw new Error("Falta RULETA_SHEET_ID");
  }

  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  });

  const existe = spreadsheet.data.sheets?.some(
    (sheet) => sheet.properties.title === SHEET_NAME,
  );

  if (!existe) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: SHEET_NAME,
              },
            },
          },
        ],
      },
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `'${SHEET_NAME}'!A1:V1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [HEADERS],
      },
    });
  }
};

/* =========================================================
   OBTENER PARTICIPANTES
========================================================= */

const obtenerFilas = async () => {
  await asegurarHoja();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `'${SHEET_NAME}'!A2:V`,
  });

  return response.data.values || [];
};

/* =========================================================
   BUSCAR POR EMAIL O TELÉFONO
========================================================= */

const buscarParticipanteExistente = async ({
  email,
  telefono,
}) => {
  const filas = await obtenerFilas();

  const emailBuscado = normalizarEmail(email);
  const telefonoBuscado = normalizarTelefono(telefono);

  for (let index = 0; index < filas.length; index++) {
    const fila = filas[index];

    const emailFila = normalizarEmail(fila[5] || "");
    const telefonoFila = normalizarTelefono(fila[6] || "");

    const coincideEmail =
      emailBuscado &&
      emailFila &&
      emailBuscado === emailFila;

    const coincideTelefono =
      telefonoBuscado &&
      telefonoFila &&
      telefonoBuscado === telefonoFila;

    if (coincideEmail || coincideTelefono) {
      return {
        rowNumber: index + 2,

        participante: {
          fecha: fila[0],
          hora: fila[1],
          id: fila[2],
          nombre: fila[3],
          apellido: fila[4],
          email: fila[5],
          telefono: fila[6],
          estudiosUniversitarios: fila[7],
          interesFormacion: fila[8],
          areasInteres: fila[9],
          tipoFormacion: fila[10],
          origen: fila[11],
          estado: fila[12],
          inicioJuego: fila[13],
          finJuego: fila[14],
          tiempoMs: Number(fila[15]) || null,
          tiempoSegundos: Number(fila[16]) || null,
          movimientos: Number(fila[17]) || null,
          ganador: fila[18] === "SI",
          codigoPremio: fila[19] || null,
          participaSorteo: fila[20] === "SI",
          canjeado: fila[21] === "SI",
        },
      };
    }
  }

  return null;
};

/* =========================================================
   BUSCAR POR ID
========================================================= */

const buscarParticipantePorId = async (id) => {
  const filas = await obtenerFilas();

  for (let index = 0; index < filas.length; index++) {
    const fila = filas[index];

    if (fila[2] === id) {
      return {
        rowNumber: index + 2,

        participante: {
          id: fila[2],
          nombre: fila[3],
          apellido: fila[4],
          email: fila[5],
          telefono: fila[6],
          estudiosUniversitarios: fila[7],
          interesFormacion: fila[8],
          areasInteres: fila[9],
          tipoFormacion: fila[10],
          origen: fila[11],
          estado: fila[12],
          inicioJuego: fila[13],
          finJuego: fila[14],
          tiempoMs: Number(fila[15]) || null,
          tiempoSegundos: Number(fila[16]) || null,
          movimientos: Number(fila[17]) || null,
          ganador: fila[18] === "SI",
          codigoPremio: fila[19] || null,
          participaSorteo: fila[20] === "SI",
          canjeado: fila[21] === "SI",
        },
      };
    }
  }

  return null;
};

/* =========================================================
   CREAR
========================================================= */

const guardarParticipanteMemotest = async (
  participante,
) => {
  await asegurarHoja();

  const ahora = new Date();

  const fecha = ahora.toLocaleDateString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
  });

  const hora = ahora.toLocaleTimeString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `'${SHEET_NAME}'!A:V`,
    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [
        [
          fecha,
          hora,
          participante.id,
          participante.nombre,
          participante.apellido,
          participante.email,
          participante.telefono,
          participante.estudiosUniversitarios,
          participante.interesFormacion,
          participante.areasInteres.join(", "),
          participante.tipoFormacion,
          participante.origen,
          "REGISTRADO",
          "",
          "",
          "",
          "",
          "",
          "NO",
          "",
          "SI",
          "NO",
        ],
      ],
    },
  });
};

/* =========================================================
   ACTUALIZAR CELDAS DEL JUEGO
========================================================= */

const actualizarJuego = async (
  rowNumber,
  {
    estado,
    inicioJuego = "",
    finJuego = "",
    tiempoMs = "",
    tiempoSegundos = "",
    movimientos = "",
    ganador = false,
    codigoPremio = "",
  },
) => {
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,

    range: `'${SHEET_NAME}'!M${rowNumber}:V${rowNumber}`,

    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [
        [
          estado,
          inicioJuego,
          finJuego,
          tiempoMs,
          tiempoSegundos,
          movimientos,
          ganador ? "SI" : "NO",
          codigoPremio,
          "SI",
          "NO",
        ],
      ],
    },
  });
};

module.exports = {
  normalizarEmail,
  normalizarTelefono,
  buscarParticipanteExistente,
  buscarParticipantePorId,
  guardarParticipanteMemotest,
  actualizarJuego,
};