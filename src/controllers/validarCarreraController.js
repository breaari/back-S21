const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});


const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const validarCarreraController = async ({
  respuestaUsuario,
  respuestaCorrecta,
  respuestasAceptadas = [],
}) => {
  if (
    typeof respuestaUsuario !== "string" ||
    typeof respuestaCorrecta !== "string"
  ) {
    throw new Error("La respuesta del usuario y la carrera correcta son obligatorias.");
  }

  const respuesta = await openai.responses.create({
    model: "gpt-5-mini",
    store: false,

    input: [
      {
        role: "system",
        content: `
Sos el validador de respuestas de un juego universitario llamado Carrera Misteriosa.

Tu única tarea es decidir si la respuesta del participante identifica
claramente la misma carrera universitaria que la respuesta correcta.

Aceptá:
- abreviaciones habituales;
- nombres parciales cuando sean inequívocos;
- errores ortográficos menores;
- respuestas informales;
- respuestas con palabras adicionales;
- nombres alternativos razonables de la misma carrera.

No aceptes:
- carreras diferentes;
- áreas demasiado generales;
- respuestas ambiguas;
- respuestas que solo compartan palabras con la carrera correcta;
- profesiones relacionadas pero distintas.

Respondé exclusivamente con un objeto JSON válido con esta estructura:

{
  "correcta": true,
  "motivo": "Explicación breve"
}

No agregues Markdown, comillas triples ni texto fuera del JSON.
        `.trim(),
      },
      {
        role: "user",
        content: JSON.stringify({
          respuestaUsuario,
          respuestaCorrecta,
          respuestasAceptadas,
        }),
      },
    ],
  });

  const texto = respuesta.output_text?.trim();

  if (!texto) {
    throw new Error("OpenAI no devolvió una respuesta.");
  }

  let resultado;

  try {
    resultado = JSON.parse(texto);
  } catch (error) {
    console.error("Respuesta no válida de OpenAI:", texto);
    throw new Error("OpenAI devolvió un formato inválido.");
  }

  return {
    correcta: resultado.correcta === true,
    motivo:
      typeof resultado.motivo === "string"
        ? resultado.motivo
        : "",
  };
};

module.exports = validarCarreraController;
