const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector(".msg");
const resetBtn = document.querySelector(".resetBtn");
const newBtn = document.querySelector(".newBtn");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = "X";
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    let isWinner = checkWinner();
  });
});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `Game Over \n \n Winner is ${winner}`;
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const posVal1 = boxes[pattern[0]].innerText;
    const posVal2 = boxes[pattern[1]].innerText;
    const posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
        return true;
      }
    }
  }
};

const resetGame = () => {
  trueO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
