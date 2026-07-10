let indice = 0;
let respuestas = [];

function mostrarPregunta() {

    const contenedor = document.getElementById("app");

    if (indice >= preguntas.length) {
        contenedor.innerHTML = "<h2>¡Evaluación finalizada!</h2><p>La siguiente versión mostrará el resultado automático.</p>";
        return;
    }

    const p = preguntas[indice];

    let html = `
        <h2>Pregunta ${indice + 1} de ${preguntas.length}</h2>
        <p>${p.texto}</p>
    `;

    p.opciones.forEach((opcion, i) => {
        html += `
        <button onclick="responder(${i})">
            ${opcion}
        </button>`;
    });

    contenedor.innerHTML = html;
}

function responder(opcion) {
    respuestas.push(opcion);
    indice++;
    mostrarPregunta();
}

document.getElementById("btnComenzar").onclick = function () {
    mostrarPregunta();
};
