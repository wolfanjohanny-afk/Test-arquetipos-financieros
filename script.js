let indicePregunta = 0;
let respuestas = [];

function iniciarTest() {
    console.log("Sistema iniciado");
}

function mostrarPregunta() {
    console.log("Mostrando pregunta", indicePregunta);
}

function responder(opcion) {
    respuestas.push(opcion);
    indicePregunta++;
    mostrarPregunta();
}

window.onload = iniciarTest;
