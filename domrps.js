const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playAgain = document.querySelector(".playagain");
const currRound = document.querySelector(".currentround");

let player = 0;
let computer = 0;

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const feedback = document.querySelector(".feedback");
let roundsPlayed = 0;

rock.addEventListener("click", () => {
  userChoice = "rock";
  game(userChoice);
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  game(userChoice);
});

scissors.addEventListener("click", () => {
  userChoice = "scissors";
  game(userChoice);
});

playAgain.addEventListener("click", () => {
  reset();
});

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

const game = (userChoice) => {
  let computerChoice = getComputerChoice();
  const result = playRound(userChoice, computerChoice);

  if (result.includes("win")) {
    player++;
    playerScore.textContent = "Player: " + player;
    feedback.textContent = `${result}\n\nComputer Selection: ${computerChoice}\nPlayer Selection: ${userChoice}`;
  } else if (result.includes("lose")) {
    computer++;
    computerScore.textContent = "Computer: " + computer;
    feedback.textContent = `${result}\n\nComputer Selection: ${computerChoice}\nPlayer Selection: ${userChoice}`;
  } else {
    feedback.textContent = `${result}\n\nComputer Selection: ${computerChoice}\nPlayer Selection: ${userChoice}`;
  }
  roundsPlayed++;
  currRound.textContent = `Round: ${roundsPlayed}`;

  if (roundsPlayed >= 5) {
    winnerOrLoser(player, computer);
    disableButtons();
  }
};

const winnerOrLoser = (player, computer) => {
  if (player > computer) {
    feedback.textContent = "You win! Game Over";
  } else if (player < computer) {
    feedback.textContent = "You lose! Game Over";
  } else {
    feedback.textContent = "It's a tie! Game Over";
  }
};

const disableButtons = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
};

const enableButtons = () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};

const reset = () => {
  player = 0;
  computer = 0;
  playerScore.textContent = "Player: " + player;
  computerScore.textContent = "Computer: " + computer;
  feedback.textContent = "Lets Play!";
  enableButtons();
  roundsPlayed = 0;
  currRound.textContent = "";
};
