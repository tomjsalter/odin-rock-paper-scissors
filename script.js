// create computerPlay function
function computerPlay() {
  let generateChoice;
  generateChoice = Math.floor(Math.random() * 3);

  if (generateChoice === 0) {
    generateChoice = "Rock";
  } else if (generateChoice === 1) {
    generateChoice = "Paper";
  } else if (generateChoice === 2) {
    generateChoice = "Scissors";
  }
  return generateChoice;
}

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

// create playRound function
function playRound(playerSelection, computerSelection) {

  computerSelection = computerPlay();
  
  console.log(`Player chose: ${playerSelection}.`);
  console.log(`Computer chose: ${computerSelection}.`);

  if (playerSelection === computerSelection) {
    console.log("The round is a tie!");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log("Player wins round!");
    return (playerScore++);
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    console.log("Computer wins round!");
    return (computerScore++);
  }
}



const bgTriangle = document.querySelector('.game-controls');

const paperBtn = document.querySelector('.ctrl-button.paper');
paperBtn.addEventListener('click', () => {
  playRound("Paper", computerSelection);
  bgTriangle.style.background = 'none';
});

const scissorsBtn = document.querySelector('.ctrl-button.scissors');
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerSelection);
  bgTriangle.style.background = "none";
});

const rockBtn = document.querySelector('.ctrl-button.rock');
rockBtn.addEventListener("click", () => {
  playRound("Rock", computerSelection);
  bgTriangle.style.background = "none";
});
