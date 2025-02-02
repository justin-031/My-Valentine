const messages = [
    "¿Esta segura?",
    "¿Realmente segura??",
    "¿Si esta siendo buena?",
    "Piesalo porfi...",
    "Solo pienselo un momento!",
    "Me pondré muy triste si dice que no...",
    "Estaré muy triste...",
    "Estare muy muy muy triste :c...",
    "Weno, ya no preguntaré...",
    "Es broma, Diga que chi amor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
