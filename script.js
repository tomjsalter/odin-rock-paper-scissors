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
  console.log(generateChoice);
}

