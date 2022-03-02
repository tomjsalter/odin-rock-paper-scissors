
let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

const bodyContainer = document.querySelector("body");
const roundScore = document.createElement("div");
roundScore.classList.add("roundScoreBox");
const gameControls = document.querySelector(".game-controls");

const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");

let userScore = document.querySelector(".user.score-count");
let houseScore = document.querySelector(".house.score-count");

const replayButton = document.createElement("button");

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


const buttonClick = document.querySelectorAll(".ctrl-button");

paperBtn.addEventListener("click", () => {
  playRound("Paper", computerSelection);
  bodyContainer.appendChild(roundScore);
  roundScore.style.display = "flex";
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerSelection);
  bodyContainer.appendChild(roundScore);
  roundScore.style.display = "flex";
});

rockBtn.addEventListener("click", () => {
  playRound("Rock", computerSelection);
  bodyContainer.appendChild(roundScore);
  roundScore.style.display = "flex";
});

userScore.textContent = 0;
houseScore.textContent = 0;

replayButton.textContent = "Restart";
replayButton.classList.add("replayBtnStyle");
bodyContainer.insertBefore(replayButton, gameControls);

replayButton.addEventListener("click", () => {
  gameControls.style.display = "flex";
  houseScore.textContent = 0;
  userScore.textContent = 0;
  roundScore.style.display = "none";
});