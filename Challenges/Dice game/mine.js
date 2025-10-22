// function to get users input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
   } else {
    console.log('error');
   }
  };
  
  //function to get computers choice with a random number from 1-3 which is assigned to rock, paper, scissors
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
      } else if (randomNumber === 1) {
        return 'paper';
        } else {
          return 'scissors';
        }
      };
  
  // to determine the winner
  const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
      return 'tie';
    } if (getUserChoice === 'rock') {
      if (getComputerChoice === 'paper') {
        return 'Computer wins';
      } else {
        return 'User wins';
        }
      } if (getUserChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
          return 'Computer wins';
        } else {
          return 'User wins';
          }
        } if (getUserChoice === 'scissors') {
          if (getComputerChoice === 'rock') {
            return 'Computer wins';
          } else {
            return 'User wins';
          }
        }
      };
  
  console.log(determineWinner(getUserChoice('paper') ,getComputerChoice()));
  
  
  
  