const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerPlay();
    playRound();
}))

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1) {
        computerChoice === rock;
    }
    if (randomNumber === 2) {
        computerChoice === paper;      
    }
    if (randomNumber === 3) {
        computerChoice === scissor;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  }

function playRound() {
    if (userChoice === "rock" && computerChoice === "paper") {
        result = "Oh no! Paper covers Rock! You lost the round!";
    }
    if (userChoice === "rock" && computerChoice === "scissor") {
        result = "Great choice! Rock crushes Scissor! You won the round!";
    }
    if (userChoice === "scissor" && computerChoice === "rock") {
        result = "Oh no! Rock crushes Scissor! You lost the round!";
    }
    if (userChoice === "scissor" && computerChoice === "paper") {
        result = "Great choice! Scissor cuts Paper! You won the round!";
    }
    if (userChoice === "paper" && computerChoice === "scissor") {
        result = "Oh no! Scissor cuts Paper! You lost the round!";
    }
    if (userChoice === "paper" && computerChoice === "rock") {
        result = "Great choice! Paper covers Rock! You won the round!";
    }
    if (userChoice === computerChoice) {
        result = "Two heads thinking alike. It's a tied round.";
    }
    resultDisplay.innerHTML = result;
}