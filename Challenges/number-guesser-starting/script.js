let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
}
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

   return humanDifference <= computerDifference;
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

const getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
};
