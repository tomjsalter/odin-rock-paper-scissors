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
  
  console.log(`User picked: ${playerSelection}.`);
  console.log(`House picked: ${computerSelection}.`);


  if (playerSelection === computerSelection) {
    roundScore.textContent = `Player picked: ${playerSelection}. House picked: ${computerSelection}. Round is a tie!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundScore.textContent = `Player picked: ${playerSelection}. House picked: ${computerSelection}. User wins round!`;
    return (playerScore++);
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    roundScore.textContent = `Player picked: ${playerSelection}. House picked: ${computerSelection}. House wins round!`;
    return (computerScore++);
  }
}


const paperBtn = document.querySelector('.ctrl-button.paper');
paperBtn.addEventListener('click', () => {
  playRound("Paper", computerSelection);
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerSelection);
});

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener("click", () => {
  playRound("Rock", computerSelection);
});


// display score of each round
const bodyContainer = document.querySelector('body');
const roundScore = document.createElement('div');
roundScore.classList.add('roundScoreBox');
bodyContainer.appendChild(roundScore);

// update scoreboard
const userScore = document.querySelector('.user.score-count');
userScore.textContent = 0;

const houseScore = document.querySelector('.house.score-count');
houseScore.textContent = 0;