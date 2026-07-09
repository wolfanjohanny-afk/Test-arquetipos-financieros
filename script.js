let indicePregunta = 0;
let respuestas = [];

function iniciarTest() {
    document.getElementById("contenido").innerHTML = "";
}

function mostrarPregunta() {

    if (indicePregunta >= preguntas.length) {
        document.getElementById("contenido").innerHTML =
        "<h2>Test finalizado</h2><p>Gracias por responder.</p>";
        return;
    }

    const pregunta = preguntas[indicePregunta];

    let html = `<h2>Pregunta ${indicePregunta + 1} de ${preguntas.length}</h2>`;
    html += `<p><strong>${pregunta.texto}</strong></p>`;

    pregunta.opciones.forEach((opcion, i) => {
        html += `
        <button onclick="responder(${i})"
        style="display:block;margin:10px 0;padding:10px;width:320px;">
        ${opcion}
        </button>`;
    });

    document.getElementById("contenido").innerHTML = html;
}

function responder(opcion) {
    respuestas.push(opcion);
    indicePregunta++;
    mostrarPregunta();
}

window.onload = iniciarTest;
