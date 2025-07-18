
module.exports = (nombre, apellido, resultados) => {
  // Ordenar de mayor a menor
  const resultadosOrdenados = [...resultados].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );
  const top3 = resultadosOrdenados.slice(0, 3);

  return `
  <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background-color: #2A9D8F; padding: 20px; text-align: center;">
        <h1 style="color: #fff; margin: 0;">Resultados de tu Test Vocacional</h1>
      </div>

      <!-- Contenido -->
      <div style="padding: 30px;">
        <p style="font-size: 18px; font-weight: bold; color: #2A9D8F;">
          ¡Gracias por animarte a descubrir tu vocación, ${nombre} ${apellido}!
        </p>
        <p>Las personas mostramos diferentes patrones de intereses y habilidades. El primer paso para desarrollar nuestro talento es reconocer en qué tipos de comportamiento nos desempeñamos mejor y nos sentimos más felices.</p>
        
        <p style="margin-top: 20px;"><strong>Tus respuestas dieron el siguiente resultado:</strong></p>
        <ul style="padding-left: 20px; margin-top: 10px;">
          ${resultadosOrdenados
            .map(
              ({ dimension, porcentaje }) =>
                `<li><strong>${dimension}</strong>: ${porcentaje}%</li>`
            )
            .join("")}
        </ul>

        <hr style="margin: 30px 0;" />

        <h2 style="color: #2A9D8F; font-size: 20px; margin-bottom: 10px;">Dimensiones destacadas</h2>

        ${top3
          .map(
            ({ dimension, porcentaje, texto, carreras }) => `
            <div style="margin-bottom: 30px;">
              <h3 style="margin: 10px 0; color: #2A9D8F;">${porcentaje}% — ${dimension}</h3>
              <p>${texto}</p>
              <p style="font-weight: bold; margin-top: 10px;">Carreras sugeridas:</p>
              <ul style="padding-left: 20px;">
                ${carreras.map((c) => `<li>${c}</li>`).join("")}
              </ul>
            </div>
          `
          )
          .join("")}

        <div style="text-align: center; margin-top: 40px;">
          <a href="https://universidadsiglo21online.com" target="_blank" style="background-color: #2A9D8F; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Conocé más sobre nuestras carreras
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 14px; color: #666;">
        Universidad Siglo 21<br/>
        <a href="https://www.instagram.com/lasiglo21.mdp" style="color: #2A9D8F; text-decoration: none;">@lasiglo21.mdp</a> | 
        <a href="https://universidadsiglo21online.com" style="color: #2A9D8F; text-decoration: none;">www.universidadsiglo21online.com</a>
      </div>
    </div>
  </div>
  `;
};

