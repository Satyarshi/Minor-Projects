const boxes = document.getElementsByClassName("boxes")[0];

let turn = "X";
let total = 0;

const box = document.querySelector(".box");
const result = document.getElementById("result");

result.style.height = `${box.offsetHeight}px`;

let ans = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = new Array(9).fill("E");

function checkWinner() {
  for (let [index1, index2, index3] of ans) {
    if (
      board[index1] !== "E" &&
      board[index1] === board[index2] &&
      board[index2] === board[index3] &&
      board[index1] === board[index3]
    ) {
      return 1;
    }
  }
  return 0;
}

const callback = (event) => {
  if (event.target.textContent != "") return;
  total++;
  if (turn == "X") {
    event.target.textContent = turn;
    board[event.target.id] = turn;
    if (checkWinner()) {
      result.textContent = "X won";
      result.style.display = "flex";
      boxes.classList.add("blur");
      boxes.removeEventListener("click", callback);
      return;
    }
    turn = "O";
  } else {
    event.target.textContent = turn;
    board[event.target.id] = turn;
    if (checkWinner()) {
      result.textContent = "O won";
      result.style.display = "flex";
      boxes.classList.add("blur");
      boxes.removeEventListener("click", callback);
      return;
    }
    turn = "X";
  }
  if (total == 9) {
    result.textContent = "Match Draw";
    result.style.display = "flex";
    boxes.classList.add("blur");
  }
};

boxes.addEventListener("click", callback);

const reset = document.getElementById("btn");

reset.addEventListener("click", () => {
  const cell = document.getElementsByClassName("box");
  Array.from(cell).forEach((item) => {
    item.textContent = "";
  });
  turn = "X";
  total = 0;
  board = new Array(9).fill("E");
  result.style.display = "none";
  boxes.classList.remove("blur");
  boxes.addEventListener("click", callback);
});

