function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Hmm, something weird is happening...";
      break;
  }
}

const buttons = document.querySelectorAll('.button');
const finalResult = document.getElementById('final-result');
const resultDisplay = document.getElementById('results');
const gamesCount = document.getElementById('gamescount');

let playerWin = 0 ;
let computerWin = 0 ;

buttons.forEach(button =>
  button.addEventListener('click', () => {
    let playerPlay = button.id;
    if (computerWin == 5 || playerWin == 5) {
      computerWin = 0 ;
      playerWin = 0 ;
      finalResult.textContent = "";
    }
    playRound(playerPlay, computerPlay());
  })
)


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let result = "";

  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    if (playerSelection == computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock")
    ) {
      result = "You lose!";
      computerWin++;
    } else {
      result = "You win!";
      playerWin++;
    }
  } else {
    result = "That move is not legal...";
  }
  resultDisplay.textContent = `Computer played ${computerSelection}. ${result}`;
  gamesCount.textContent = `Computer : ${computerWin} | You : ${playerWin}`;

  if (playerWin == 5) {
    finalResult.textContent = " VICTORY!";
  } else if (computerWin == 5) {
    finalResult.textContent = " DEFEAT!"
  }
  
}



