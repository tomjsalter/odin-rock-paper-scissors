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
  console.log(`Computer input: ${generateChoice}.`);
  return generateChoice;
}

// create playerPlay function
function playerPlay() {
  let playerChoice;
  let lowerCaseString;
  let upperCaseChar;

  playerChoice = prompt("Choose Rock, Paper or Scissors?");
  console.log(playerChoice);
  upperCaseChar = playerChoice.charAt(0).toUpperCase();
  lowerCaseString = playerChoice.substring(1).toLowerCase();
  playerChoice = upperCaseChar + lowerCaseString;
  console.log(playerChoice);
  return playerChoice;
}

// create playRound function
function playRound(playerSelection, computerSelection) {
  console.log(`Player chose: ${playerSelection}.`);
  console.log(`Computer chose: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "Player wins!";
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return "Computer wins!";
  }
}

let playerSelection = playerPlay();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
