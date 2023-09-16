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
  
  const game = () => {
    let i = 0;
    while (i < 5) {
      let userInput = prompt("Enter your selection:");
      userInput = inputValidation(userInput);
      const result = playRound(userInput, getComputerChoice());
      if (result.includes("win")) {
        player++;
        console.log(result);
      } else if (result.includes("lose")) {
        computer++;
        console.log(result);
      } else {
        console.log(result);
      }
      i++;
    }
    return { player, computer };
  };
  
  const winnerOrLoser = (player, computer) => {
    if (player > computer) {
      console.log("You win!");
    } else if (player < computer) {
      console.log("You lose!");
    } else {
      console.log("It's a tie!");
    }
  };
  
  const inputValidation = (userInput) => {
    while (
      userInput.toLowerCase() !== "rock" &&
      userInput.toLowerCase() !== "paper" &&
      userInput.toLowerCase() !== "scissors"
    ) {
      console.log("Please enter a valid selection.");
      userInput = prompt("Enter your selection:");
    }
    return userInput;
  };
  
  game();
  winnerOrLoser(player, computer);