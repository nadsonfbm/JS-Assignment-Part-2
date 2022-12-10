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
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'Scissor'
    }
    if (randomNumber === 3) {
      computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

function playRound() {
    if (userChoice === "Rock" && computerChoice === "Paper") {
        result = "Oh no! Paper covers Rock! You lost the round!";
    }
    if (userChoice === "Rock" && computerChoice === "Scissor") {
        result = "Great choice! Rock crushes Scissor! You won the round!";
    }
    if (userChoice === "Scissor" && computerChoice === "Rock") {
        result = "Oh no! Rock crushes Scissor! You lost the round!";
    }
    if (userChoice === "Scissor" && computerChoice === "Paper") {
        result = "Great choice! Scissor cuts Paper! You won the round!";
    }
    if (userChoice === "Paper" && computerChoice === "Scissor") {
        result = "Oh no! Scissor cuts Paper! You lost the round!";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "Great choice! Paper covers Rock! You won the round!";
    }
    if (userChoice === computerChoice) {
        result = "Two heads thinking alike. It's a tied round.";
    }
    resultDisplay.innerHTML = result;
}