// function to get users input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
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
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'tie';
    } 
    
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer wins' : 'User wins';
      } 
    
    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer wins' : 'User wins';
        }
    
    if (userChoice === 'scissors') {
          return computerChoice === 'rock' ? 'Computer wins' : 'User wins';
          }

    if (userChoice === 'bomb') {
      return 'User wins with a secret cheat code!';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    
    const computerChoice = getComputerChoice();

    console.log('User choice!', userChoice);
    console.log('Computer choice!', computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }

  playGame();
  
  
  
  