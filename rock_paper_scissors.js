const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const playRound = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      userChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      return "You lose! Paper beats rock!";
    } else if (
      userChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      return "You win! Paper beats rock!";
    } else if (
      userChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "scissors"
    ) {
      return "You lose! Scissors beats paper!";
    } else if (
      userChoice.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      return "You win! Scissors beats paper!";
    } else if (
      userChoice.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      return "You lose! Rock beats scissors!";
    } else if (
      userChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissors"
    ) {
      return "You win! Rock beats scissors!";
    }
  };
  
  let player = 0;
  let computer = 0;

  const playerScore = document.querySelector('.player');
  const computerScore = document.querySelector('.computer');
  const feedback = document.querySelector('.feedback');
  let roundsPlayed = 0;
  
  const game = () => {
    let i = 0;
    while (i < 5) {
      let userInput = "";
      const result = playRound(userInput, getComputerChoice());
      if (result.includes("win")) {
        player++;
        playerScore.textContent = (player);
        feedback.textContent = (result + " " + `Computer Selection: ${getComputerChoice()} Player Selection: ${userInput}`);
      } else if (result.includes("lose")) {
        computer++;
        computerScore.textContent = (computer);
        feedback.textContent = (result + " " + `Computer Selection: ${getComputerChoice()} Player Selection: ${userInput}`);
      } else {
        feedback.textContent = (result + " " + `Computer Selection: ${getComputerChoice()} Player Selection: ${userInput}`);
      }
      i++;
    }
    return { player, computer };
  };
  
  const winnerOrLoser = (player, computer) => {
    if (player > computer) {
      feedback.textContent=("You win!");
    } else if (player < computer) {
      feedback.textContent=("You lose!");
    } else {
      feedback.textContent=("It's a tie!");
    }
  };
  

  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');


  rock.addEventListener('click', ()=>{
    userChoice = 'rock';
    game();
  })

  paper.addEventListener('click', ()=>{
    userChoice = 'paper';
    game();
  })

  scissors.addEventListener('click', ()=>{
    userChoice = 'scissors';
    game();
  })

  // game();
  // winnerOrLoser(player, computer);