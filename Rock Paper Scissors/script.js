let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const user = document.querySelector(".user-score");
const comp = document.querySelector(".comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const drawGame = () => {
  return msg.innerText = "Draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#65B741";
  } else {
    compScore++;
    comp.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#BF3131";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};