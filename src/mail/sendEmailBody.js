const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

const sendEmailBody = async (program, name, lastName) => {
  try {

    const rawdata = fs.readFileSync(jsonPath);
    const carreras = JSON.parse(rawdata);

    const carrera = carreras.Carreras.find(c => c.name === program);

    if (!carrera) {
      console.log(`No se encontró información para la carrera '${program}'`);
    }

    const { url } = carrera;

    const body = `

    <body>
    <p><strong>¡Hola ${name} ${lastName}!</strong></p>
    <p>Gracias por tu interés en la Universidad Siglo 21 y nuestra oferta académica 2025. Estamos encantados de poder proporcionarte información sobre la carrera que te interesa.</p>
    <p>Desde hace una década somos la Universidad de Gestión Privada Más Elegida de Argentina. Los motivos?</p>
    <ul>
      <li><strong>Nuestra misión está alineada a tus objetivos,</strong> trabajamos para acompañarte en cada paso y que tu camino al Título Profesional sea el más adecuado.</li>
      <li><strong>Lo último en Tecnología Educativa.</strong></li>
      <li><strong>Atención Permanente.</strong></li>
      <li><strong>Prácticas Profesionales.</strong></li>
      <li><strong>Convenios Institucionales</strong> con Organizaciones Intermedias en el país y Universidades del Exterior.</li>
      <li><strong>Reconocimiento de Equivalencias.</strong></li>
      <li><strong>Beneficios Arancelarios por Rendimiento Académico.</strong></li>
      <li><strong>Portal de Empleo.</strong></li>
      <li><strong>Aula Móvil.</strong> Acceso al material de estudios, clases y exámenes desde dónde estés.</li>
      <li><strong>Más de 300 Centros de Aprendizaje Universitarios</strong> en todo el territorio argentino. La Universidad Siglo 21 siempre cerca tuyo.</li>
    </ul>
    <p>Te invitamos a conocer el plan de estudios, perfil profesional y salida laboral ingresando <a href="${url}">aquí</a>. Ya mismo podés empezar a estudiar.</p>
    <p><strong>Dos Modalidades de Cursado para que elijas la que responde a tus necesidades y posibilidades:</strong></p>
    <ol>
      <li><strong>La modalidad Educación Distribuida:</strong> reúne las mejores prácticas de la educación a distancia y las mejores de la educación presencial. Se estudia de manera online y se asiste 1 vez por semana a una teleclase en el Centro de Apoyo Universitario más cercano. Todo en compañía de compañeros de cursado y un tutor de aprendizaje presencial. Los exámenes se rinden en el mismo lugar.</li>
      <li><strong>La modalidad Educación Distribuida Home:</strong> es 100% online y está pensada para quienes quieren alcanzar un título y no cuentan con la posibilidad o prefieren no asistir a clases presenciales. Cuenta con innovaciones tecnológicas que permiten la comunicación constante y en tiempo real con compañeros y profesores virtuales en cada materia.</li>
      <li><strong>Presencial Distribuida (100% Nueva en 2025 para Mar del Plata):</strong> Ofrece una experiencia única, con telepresencialidad sincrónica y tecnología de última generación, que permitirá cursar carreras de manera presencial en el CAU de Mar del Plata, interactuando en vivo con docentes y estudiantes. Como ventaja adicional, realizan prácticas en contextos reales sin necesidad de salir de su ciudad.</li>
    </ol>
    <p><strong>¡Gracias por tenernos en cuenta para continuar tu formación profesional!</strong></p>
    <p>Cualquier duda puedes responder este correo o llamarnos al <a href="https://api.whatsapp.com/send?phone=5492235512665&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%E2%80%A6" target="_blank" rel="noopener noreferrer">+54 9 223 551-2665</a>.</p>
    <p>¡Espero tus consultas!</p>
  </body>

    `;

    return body;
  } catch (error) {
    console.error('Error al generar el cuerpo del correo:', error);
    
  }
};

module.exports = sendEmailBody;


