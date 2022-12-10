let playerSelection;
let computerSelection;
let result;
const playerSelectionDisplay = document.getElementById("player-selection");
const computerSelectionDisplay = document.getElementById("computer-selection");
const resultDisplay = document.getElementById("result");
const randomSelections = document.querySelectorAll("button");

randomSelections.forEach(randomSelection => randomSelection.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerSelectionDisplay.innerHTML = playerSelection;
    computerPlay();
    playRound();
}))

function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1) {
        computerSelection === rock;
    }
    if (randomNumber === 2) {
        computerSelection === paper;      
    }
    if (randomNumber === 3) {
        computerSelection === scissor;
    }
    computerSelectionDisplay.innerHTML = computerSelection;
  }

function playRound() {
    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Oh no! Paper covers Rock! You lost the round!";
    }
    if (playerSelection === "rock" && computerSelection === "scissor") {
        result = "Great choice! Rock crushes Scissor! You won the round!";
    }
    if (playerSelection === "scissor" && computerSelection === "rock") {
        result = "Oh no! Rock crushes Scissor! You lost the round!";
    }
    if (playerSelection === "scissor" && computerSelection === "paper") {
        result = "Great choice! Scissor cuts Paper! You won the round!";
    }
    if (playerSelection === "paper" && computerSelection === "scissor") {
        result = "Oh no! Scissor cuts Paper! You lost the round!";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Great choice! Paper covers Rock! You won the round!";
    }
    if (playerSelection === computerSelection) {
        result = "Two heads thinking alike. It's a tied round.";
    }
    resultDisplay.innerHTML = result;
}