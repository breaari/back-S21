const crypto = require("crypto");

const participantes = [];

const crearParticipante = ({
  nombre,
  apellido,
  correo,
  telefono,
  localidad,
}) => {
  if (
    !nombre?.trim() ||
    !apellido?.trim() ||
    !correo?.trim() ||
    !telefono?.trim() ||
    !localidad?.trim()
  ) {
    throw new Error("Faltan campos obligatorios");
  }

  const participante = {
    id: crypto.randomUUID(),
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    correo: correo.trim().toLowerCase(),
    telefono: telefono.trim(),
    localidad: localidad.trim(),
    estado: "pendiente",
    creadoEn: new Date().toISOString(),
    iniciadoEn: null,
    finalizadoEn: null,
  };

  participantes.push(participante);

  console.log(
    `🎡 Nuevo participante: ${participante.nombre}`,
  );

  return participante;
};

const obtenerSiguienteParticipante = () => {
  const jugando = participantes.find(
    (participante) =>
      participante.estado === "jugando",
  );

  const pendientes = participantes.filter(
    (participante) =>
      participante.estado === "pendiente",
  );

  const siguiente =
    jugando || pendientes[0] || null;

  return {
    participante: siguiente,

    esperando: pendientes.length,

    cola: pendientes.map(
      (participante, index) => ({
        posicion: index + 1,
        id: participante.id,
        nombre: participante.nombre,
        apellido: participante.apellido,
      }),
    ),
  };
};

const iniciarParticipante = (id) => {
  const participante = participantes.find(
    (item) => item.id === id,
  );

  if (!participante) {
    throw new Error("Participante no encontrado");
  }

  const otroJugando = participantes.find(
    (item) =>
      item.estado === "jugando" &&
      item.id !== id,
  );

  if (otroJugando) {
    throw new Error(
      "Ya existe un participante jugando",
    );
  }

  if (participante.estado === "finalizado") {
    throw new Error(
      "El participante ya finalizó",
    );
  }

  participante.estado = "jugando";

  if (!participante.iniciadoEn) {
    participante.iniciadoEn =
      new Date().toISOString();
  }

  return participante;
};

const finalizarParticipante = (id) => {
  const participante = participantes.find(
    (item) => item.id === id,
  );

  if (!participante) {
    throw new Error("Participante no encontrado");
  }

  participante.estado = "finalizado";
  participante.finalizadoEn =
    new Date().toISOString();

  return participante;
};

module.exports = {
  crearParticipante,
  obtenerSiguienteParticipante,
  iniciarParticipante,
  finalizarParticipante,
};