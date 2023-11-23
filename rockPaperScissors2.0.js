// Ensures the user picks a valid option.
const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid Choice");
  }
}
// Generates choice for the computer.
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else randomNumber === 2;
  return "scissors";
}
// Generates all possible outcomes.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === "bomb") {
    return "You won";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else return "You won";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else return "You won";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else return "You won";
  }
}
// A function that determines a winner by calling previous functions.
const playGame = function playGame() {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
// Calls the playGame() function.
playGame();