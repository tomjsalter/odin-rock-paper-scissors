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
    userScore.textContent = parseInt(userScore.textContent) + 1;
    if (userScore.textContent === "5") {
      roundScore.textContent = "User wins the game!";
      gameControls.style.display = "none";
    }
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    roundScore.textContent = `Player picked: ${playerSelection}. House picked: ${computerSelection}. House wins round!`;
    houseScore.textContent = parseInt(houseScore.textContent) + 1;
    if (houseScore.textContent === "5") {
      roundScore.textContent = "House wins the game!";
      gameControls.style.display = "none";
    }
  }
}




// target game controls to turn off after a game is won
const gameControls = document.querySelector(".game-controls");

// player button choice
const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  playRound("Paper", computerSelection);
  bodyContainer.appendChild(roundScore);
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerSelection);
  bodyContainer.appendChild(roundScore);
});

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  playRound("Rock", computerSelection);
  bodyContainer.appendChild(roundScore);
});

// display score of each round
const bodyContainer = document.querySelector("body");
const roundScore = document.createElement("div");
roundScore.classList.add("roundScoreBox");

// update scoreboard
let userScore = document.querySelector(".user.score-count");
userScore.textContent = 0;

let houseScore = document.querySelector(".house.score-count");
houseScore.textContent = 0;

// replay button
const replayButton = document.createElement("button");
replayButton.textContent = "Play again!";
replayButton.classList.add("replayBtnStyle");
replayButton.addEventListener("click", () => {
  gameControls.style.display = "flex";
  houseScore.textContent = 0;
  userScore.textContent = 0;
  roundScore.style.display = "none";
});