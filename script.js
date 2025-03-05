const options = ["piedra", "papel", "tijera"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let eleccion;
    while (true) {
        eleccion = prompt("Elige piedra, papel o tijera:").toLowerCase();
        if (options.includes(eleccion)) {
            return eleccion;
        }
        alert("Opción inválida, intenta de nuevo.");
    }
}

function playRound(humanChoice, computerChoice) {

    console.log(`Humano: ${humanChoice} | Computadora: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Empate esta ronda.");
        return;
    }

    if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        console.log("¡Ganaste esta ronda!");
        humanScore++;
    } else {
        console.log("Perdiste esta ronda.");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Juego Terminado");
    console.log(`Humano ${humanScore} | Computadora ${computerScore}`);
}

playGame();
