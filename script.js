const messages = [
    "¿Esta segura?",
    "Realmente segura?",
    "¿Si esta siendo wena amol?",
    "Pieselo porfi...",
    "Poque ño?",
    "Me pondré muy triste si dice que ño...",
    "Estaré muy triste...",
    "Estare muy muy muy triste :c...",
    "Weno, ya no preguntaré...",
    "Es broma, Diga que chi amor! ❤️"
];

let messageIndex = 0;

function handleÑoClick() {
    const ñoButton = document.querySelector('.ño-button');
    const chiButton = document.querySelector('.chi-button');
    ñoButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(chiButton).fontSize);
    chiButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleChiClick() {
    window.location.href = "yes_page.html";
}
