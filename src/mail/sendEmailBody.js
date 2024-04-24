const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

const sendEmailBody = async (program, name, lastName) => {
  try {
    // Lee el archivo JSON que contiene la información de las carreras
    const rawdata = fs.readFileSync(jsonPath);
    const carreras = JSON.parse(rawdata);

    // Busca la carrera que coincide con el nombre recibido en 'program'
    const carrera = carreras.Carreras.find(c => c.name === program);

    if (!carrera) {
      console.log(`No se encontró información para la carrera '${program}'`);
    }

    const { url } = carrera;

    // Genera el cuerpo del correo con la URL obtenida
    const body = `
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333; padding: 20px;">

    <h2 style="color: #006400;">¡Hola ${name} ${lastName}!</h2>

    <p>Gracias por tu interés en la Universidad Siglo 21 y nuestra oferta académica. Estamos encantados de poder proporcionarte información sobre la carrera que te interesa.</p>

    <p>La Universidad cuenta con el reconocimiento oficial definitivo del Ministerio de Educación de la Nación.</p>

    <p>Te invitamos a conocer el plan de estudios, perfil profesional y salida laboral ingresando <a href="${url}" style="color: #006400; text-decoration: none;">aquí</a>.</p>

    <p>Queremos que sepas que durante el primer semestre de tu carrera, además de tus materias disciplinares, cursarás dos materias del Programa UNIVERSITARIO 21, las cuales te ayudarán a insertarte en el modelo académico Siglo 21 y tienen como objetivo generar competencias específicas que te van a acompañar a lo largo de tu vida universitaria y profesional.</p>

    <ul>
        <li>"Aprender en el Siglo 21"</li>
        <li>"Tecnología y Modelos Globales"</li>
    </ul>

    <p>La modalidad <strong>Educación Distribuida</strong> reúne las mejores prácticas de la educación a distancia y las mejores de la educación presencial. Se estudia de manera online y se asiste 1 vez por semana a una teleclase en el Centro de Apoyo Universitario más cercano. Todo en compañía de compañeros de cursado y un tutor de aprendizaje presencial. Los exámenes se rinden en el mismo lugar.</p>

    <p>La modalidad <strong>Educación Distribuida Home</strong> es 100% online y está pensada para quienes quieren alcanzar un título y no cuentan con la posibilidad o prefieren no asistir a clases presenciales. Cuenta con innovaciones tecnológicas que permiten la comunicación constante y en tiempo real con compañeros y profesores virtuales en cada materia.</p>

    <p>Tendrás una formación integral a lo largo de tu recorrido universitario con orientación al desarrollo emprendedor, una bolsa de trabajo para egresados y un modelo basado en competencias.</p>

    <p>Es por esto que deberás utilizar tu computadora portátil para llevar tus estudios al día. Los exámenes parciales y finales de cada una de las materias los vas a rendir con tu propia herramienta de estudio, ¡tú aula es móvil!</p>

    <p>Para que puedas aprovechar al máximo esta experiencia educativa, te recomendamos disponer de una notebook.</p>

    <p>¡Gracias por tenernos en cuenta para continuar tu formación profesional!</p>

    <p>Cualquier duda puedes responder este correo o llamarnos al <strong>+54 9 223 551-2665</strong>.</p>

    <p>¡Espero tus consultas!</p>
    
    `;

    return body;
  } catch (error) {
    console.error('Error al generar el cuerpo del correo:', error);
    
  }
};

module.exports = sendEmailBody;

