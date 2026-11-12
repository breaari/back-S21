// const fs = require('fs');
// const path = require('path');

// const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

// const sendEmailBody = async (program, name, lastName) => {
//   try {

//     const rawdata = fs.readFileSync(jsonPath);
//     const carreras = JSON.parse(rawdata);

//     const carrera = carreras.Carreras.find(c => c.name === program);

//     if (!carrera) {
//       console.log(`No se encontró información para la carrera '${program}'`);
//     }

//     const { url } = carrera;

//     const body = `

//     <body>
//     <p><strong>¡Hola ${name} ${lastName}!</strong></p>
//     <p>Gracias por tu interés en la Universidad Siglo 21 y nuestra oferta académica 2025. Estamos encantados de poder proporcionarte información sobre la carrera que te interesa.</p>
//     <p>Desde hace una década somos la Universidad de Gestión Privada Más Elegida de Argentina. Los motivos?</p>
//     <ul>
//       <li><strong>Nuestra misión está alineada a tus objetivos,</strong> trabajamos para acompañarte en cada paso y que tu camino al Título Profesional sea el más adecuado.</li>
//       <li><strong>Lo último en Tecnología Educativa.</strong></li>
//       <li><strong>Atención Permanente.</strong></li>
//       <li><strong>Prácticas Profesionales.</strong></li>
//       <li><strong>Convenios Institucionales</strong> con Organizaciones Intermedias en el país y Universidades del Exterior.</li>
//       <li><strong>Reconocimiento de Equivalencias.</strong></li>
//       <li><strong>Beneficios Arancelarios por Rendimiento Académico.</strong></li>
//       <li><strong>Portal de Empleo.</strong></li>
//       <li><strong>Aula Móvil.</strong> Acceso al material de estudios, clases y exámenes desde dónde estés.</li>
//       <li><strong>Más de 300 Centros de Aprendizaje Universitarios</strong> en todo el territorio argentino. La Universidad Siglo 21 siempre cerca tuyo.</li>
//     </ul>
//     <p>Te invitamos a conocer el plan de estudios, perfil profesional y salida laboral ingresando <a href="${url}">aquí</a>. Ya mismo podés empezar a estudiar.</p>
//     <p><strong>Dos Modalidades de Cursado para que elijas la que responde a tus necesidades y posibilidades:</strong></p>
//     <ol>
//       <li><strong>La modalidad Educación Distribuida:</strong> reúne las mejores prácticas de la educación a distancia y las mejores de la educación presencial. Se estudia de manera online y se asiste 1 vez por semana a una teleclase en el Centro de Apoyo Universitario más cercano. Todo en compañía de compañeros de cursado y un tutor de aprendizaje presencial. Los exámenes se rinden en el mismo lugar.</li>
//       <li><strong>La modalidad Educación Distribuida Home:</strong> es 100% online y está pensada para quienes quieren alcanzar un título y no cuentan con la posibilidad o prefieren no asistir a clases presenciales. Cuenta con innovaciones tecnológicas que permiten la comunicación constante y en tiempo real con compañeros y profesores virtuales en cada materia.</li>
//       <li><strong>Presencial Distribuida (100% Nueva en 2025 para Mar del Plata):</strong> Ofrece una experiencia única, con telepresencialidad sincrónica y tecnología de última generación, que permitirá cursar carreras de manera presencial en el CAU de Mar del Plata, interactuando en vivo con docentes y estudiantes. Como ventaja adicional, realizan prácticas en contextos reales sin necesidad de salir de su ciudad.</li>
//     </ol>
//     <p><strong>¡Gracias por tenernos en cuenta para continuar tu formación profesional!</strong></p>
//     <p>Cualquier duda puedes responder este correo o llamarnos al <a href="https://api.whatsapp.com/send?phone=5492235512665&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%E2%80%A6" target="_blank" rel="noopener noreferrer">+54 9 223 551-2665</a>.</p>
//     <p>¡Espero tus consultas!</p>
//   </body>

//     `;

//     return body;
//   } catch (error) {
//     console.error('Error al generar el cuerpo del correo:', error);

//   }
// };

// module.exports = sendEmailBody;

// const fs = require('fs');
// const path = require('path');

// const jsonPath = path.join(__dirname, '../Carreras/carreras.json');

// const sendEmailBody = async (program, name, lastName) => {
//   try {
//     const rawdata = fs.readFileSync(jsonPath);
//     const carreras = JSON.parse(rawdata);

//     const carrera = carreras.Carreras.find(c => c.name === program);

//     if (!carrera) {
//       console.log(`No se encontró información para la carrera '${program}'`);
//       return '';
//     }

//     const { url } = carrera;

//     const body = `
//     <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:30px;">
//       <div style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.06);">

//         <!-- Header -->
//         <div style="background-color:#2A9D8F; padding:22px; text-align:center;">
//           <h1 style="color:#ffffff; margin:0; font-size:22px;">
//             ${program} · Ingreso 2026
//           </h1>
//         </div>

//         <!-- Contenido -->
//         <div style="padding:30px;">
//           <p style="font-size:18px; font-weight:bold; color:#2A9D8F;">
//             ¡Hola ${name} ${lastName}!
//           </p>

//           <p>
//             Gracias por tu interés en la <strong>Universidad Siglo 21</strong>.
//             Queremos acompañarte en el inicio de tu camino profesional con nuestra
//             <strong>oferta académica 2026</strong>.
//           </p>

//           <hr style="border:none;border-top:1px solid #e0e0e0; margin:24px 0;" />

//           <h2 style="color:#2A9D8F; font-size:18px; margin-bottom:10px;">
//             ¿Por qué elegir Universidad Siglo 21?
//           </h2>

//           <ul style="padding-left:20px; margin:0;">
//             <li>Universidad privada <strong>más elegida de Argentina</strong>.</li>
//             <li>Tecnología educativa aplicada al aprendizaje.</li>
//             <li>Acompañamiento académico permanente.</li>
//             <li>Prácticas profesionales y convenios institucionales.</li>
//             <li>Reconocimiento de equivalencias.</li>
//             <li>Beneficios arancelarios por rendimiento académico.</li>
//             <li>Portal de Empleo para estudiantes y graduados.</li>
//             <li>Más de <strong>300 Centros de Aprendizaje Universitarios</strong>.</li>
//           </ul>

//           <p style="margin-top:20px;">
//             👉 Conocé el <strong>plan de estudios, perfil profesional y salida laboral</strong>
//             ingresando
//             <a href="${url}" target="_blank" style="color:#2A9D8F; font-weight:bold;">
//               aquí
//             </a>.
//           </p>

//           <hr style="border:none;border-top:1px solid #e0e0e0; margin:24px 0;" />

//           <h2 style="color:#2A9D8F; font-size:18px; margin-bottom:10px;">
//             Modalidades de cursado
//           </h2>

//           <p><strong>Educación Distribuida:</strong> online + instancia semanal presencial.</p>
//           <p><strong>Educación Distribuida Home:</strong> 100% online.</p>
//           <p><strong>Presencial Distribuida (Mar del Plata):</strong> cursado presencial con tecnología de última generación y prácticas locales.</p>

//           <!-- CTA WhatsApp -->
//           <div style="text-align:center; margin:35px 0;">
//             <a href="https://wa.me/5492235512665"
//                target="_blank"
//                style="background-color:#25D366; color:#ffffff; padding:14px 22px; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">
//               Consultanos por WhatsApp
//             </a>
//           </div>

//           <p style="text-align:center; font-size:15px;">
//             Estamos para acompañarte y ayudarte a tomar la mejor decisión.
//           </p>
//         </div>

//         <!-- Footer -->
//         <div style="background-color:#f1f1f1; padding:20px; text-align:center; font-size:14px; color:#666;">
//           Universidad Siglo 21<br/>
//           <a href="https://www.instagram.com/lasiglo21.mdp" style="color:#2A9D8F; text-decoration:none;">
//             @lasiglo21.mdp
//           </a> |
//           <a href="https://universidadsiglo21online.com" style="color:#2A9D8F; text-decoration:none;">
//             universidadsiglo21online.com
//           </a>
//         </div>

//       </div>
//     </div>
//     `;

//     return body;

//   } catch (error) {
//     console.error('Error al generar el cuerpo del correo:', error);
//     return '';
//   }
// };

// module.exports = sendEmailBody;

const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "../Carreras/carreras.json");

// Prioriza la imagen de campaña 2027 ya alojada en src/assets.
// Si se reemplazó el archivo conservando su nombre anterior, también la detecta.
// CAMPAIGN_EMAIL_IMAGE permite indicar el nombre exacto sin editar la plantilla.
const getCampaignImageUrl = () => {
  const assetsDir = path.join(__dirname, "../assets");
  const configured = process.env.CAMPAIGN_EMAIL_IMAGE;
  const files = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
  const images = files.filter((file) =>
    /\.(png|jpe?g|webp|gif)$/i.test(file)
  );

  let filename = configured && images.includes(configured) ? configured : null;

  if (!filename) {
    const candidates = images
      .filter((file) => /2027|campa(?:ñ|n)a|portada|header/i.test(file))
      .map((file) => ({
        file,
        score: /2027/.test(file) ? 2 : 1,
        modified: fs.statSync(path.join(assetsDir, file)).mtimeMs,
      }))
      .sort((a, b) => b.score - a.score || b.modified - a.modified);

    filename = candidates[0]?.file;
  }

  // Mantiene compatibilidad si la nueva imagen aún no está disponible.
  filename ||= "PORTADA - CAMPAÑA 2026_LINKEDIN.jpeg";
  return `https://back.universidadsiglo21online.com/assets/${encodeURIComponent(filename)}`;
};

const sendEmailBody = async (program, name, lastName) => {
  try {
    const rawdata = fs.readFileSync(jsonPath);
    const carreras = JSON.parse(rawdata);

    const carrera = carreras.Carreras.find((c) => c.name === program);

    if (!carrera) {
      console.log(`No se encontró información para la carrera '${program}'`);
      return "";
    }

    const { url } = carrera;
    const campaignImageUrl = getCampaignImageUrl();

    const body = `
    <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:30px;">
      <div style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.06);">

        <!-- Imagen campaña -->
        <img 
          src="${campaignImageUrl}"
          alt="Universidad Siglo 21 - Potenciando Nuevos Liderazgos"
          style="width:100%; display:block; border:0;"
        />

        <!-- Header -->
        <div style="background-color:#006C5B; padding:22px; text-align:center;">
          <h1 style="color:#ffffff; margin:0; font-size:22px;">
            ${program} · Ingreso 2027
          </h1>
        </div>

        <!-- Contenido -->
        <div style="padding:30px;">
          <p style="font-size:18px; font-weight:bold; color:#009681;">
            ¡Hola ${name} ${lastName}!
          </p>

          <p>
            Gracias por tu interés en la <strong>Universidad Siglo 21</strong>.
            Queremos acompañarte a potenciar tu futuro profesional
            con nuestra <strong>oferta educativa 2027</strong>.
          </p>

       <hr style="border:none;border-top:1px solid #e0e0e0; margin:24px 0;" />

          <h2 style="color:#009681; font-size:18px; margin-bottom:10px;">
            ¿Por qué elegir Universidad Siglo 21?
          </h2>

          <ul style="padding-left:20px; margin:0;">
            <li>Es la Universidad privada <strong>más elegida de Argentina</strong>.</li>
            <li>Ofrece tecnología educativa aplicada al aprendizaje.</li>
            <li>Cuenta con acompañamiento académico permanente.</li>
            <li>Prácticas profesionales y convenios institucionales.</li>
            <li>Reconocimiento de equivalencias.</li>
            <li>Beneficios arancelarios por rendimiento académico.</li>
            <li>Portal de Empleo para estudiantes y graduados.</li>
            <li>Más de <strong>300 Centros de Aprendizaje Universitarios</strong>.</li>
          </ul>

          <p style="margin-top:20px;">
            👉 Conocé <strong>tu futura carrera:</strong> plan de estudios, perfil profesional y salida laboral ingresando
            <a href="${url}" target="_blank" style="color:#009681; font-weight:bold;">
              aquí
            </a>.
          </p>

          <hr style="border:none;border-top:1px solid #e0e0e0; margin:24px 0;" />

          <h2 style="color:#009681; font-size:18px; margin-bottom:10px;">
            Modalidades de cursado
          </h2>

          <p><strong>Educación Distribuida:</strong> Lo mejor de los dos mundos! Vas a contar con la flexibilidad de la cursada online + 1 encuentro semanal presencial en tu CAU, para enriquecer tu proceso de aprendizaje junto a tus compañeros y un tutor dinamizador que les brindara guía y apoyo.</p>
          <p><strong>Educación Distribuida Home:</strong>100% online, flexible y adaptable a tus horarios! La única Universidad que te permite elegir en que día y horario rendir tus examenes!</p>
          <p><strong>Presencial Distribuida (Mar del Plata):</strong> cursado presencial con tecnología de última generación y prácticas locales.</p>

          <!-- CTA WhatsApp -->
          <div style="text-align:center; margin:35px 0;">
            <a href="https://wa.me/5492235512665"
               target="_blank"
               style="background-color:#25D366; color:#ffffff; padding:14px 22px; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">
              Consultanos por WhatsApp
            </a>
          </div>

          <p style="text-align:center; font-size:15px;">
            Estamos para acompañarte y ayudarte a tomar la mejor decisión.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color:#f1f1f1; padding:20px; text-align:center; font-size:14px; color:#666;">
          Universidad Siglo 21<br/>
          <a href="https://www.instagram.com/lasiglo21.mdp" style="color:#009681; text-decoration:none;">
            @lasiglo21.mdp
          </a> |
          <a href="https://universidadsiglo21online.com" style="color:#009681; text-decoration:none;">
            universidadsiglo21online.com
          </a>
        </div>

      </div>
    </div>
    `;

    return body;
  } catch (error) {
    console.error("Error al generar el cuerpo del correo:", error);
    return "";
  }
};
module.exports = sendEmailBody;
