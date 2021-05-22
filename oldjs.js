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
  
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    console.log(`Computer played ${computerSelection}`);
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
      } else {
        result = "You win!";
      }
    } else {
      result = "That move is not legal...";
    }
    return result;
  }
  
  
  function game() {
    let playerWin = 0;
    let computerWin = 0;
  
    for (let i = 1; i <= 5; i++) {
      let playerHand = prompt("Choose your weapon (Rock/Paper/Scissors)");
      let computerHand = computerPlay();
      let roundResult = playRound(playerHand, computerHand);
      if (
        roundResult == "You lose!" ||
        roundResult == "That move is not legal..."
      ) {
        computerWin++;
      } else if (roundResult == "You win!") {
        playerWin++;
      }
      console.log(roundResult);
      console.log(`Your score : ${playerWin} \nComputer score : ${computerWin}`);
    }
    if (playerWin == computerWin) {
      console.log("No winner!");
    } else if (playerWin > computerWin) {
      console.log("Victory!");
    } else {
      console.log("Defeat!");
    }
  }
  
  
  game();
  