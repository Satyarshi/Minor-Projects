const btn = document.getElementById("btn");
const left = document.getElementById("left");
const right = document.getElementById("right");
const resultBtn = document.getElementById("resultBtn");

const choices = ["rock", "paper", "scissor"];

btn.addEventListener("click", () => {
  btn.disabled = true;
  left.classList.add("shake-left");
  right.classList.add("shake-right");

  setTimeout(() => {
    left.classList.remove("shake-left");
    right.classList.remove("shake-right");

    const leftChoice = choices[Math.floor(Math.random() * choices.length)];
    const rightChoice = choices[Math.floor(Math.random() * choices.length)];

    left.src = `./${leftChoice}.png`;
    right.src = `./${rightChoice}1.png`;

    const winner = getWinner(leftChoice, rightChoice);

    resultBtn.textContent = winner;
    resultBtn.classList.add("show");

    btn.disabled = false;
  }, 2000);
});

function getWinner(left, right) {
  if (left === right) {
    return "🤝 Draw";
  }

  if (
    (left === "rock" && right === "scissor") ||
    (left === "paper" && right === "rock") ||
    (left === "scissor" && right === "paper")
  ) {
    return "🎉 Left Wins";
  }

  return "💻 Right Wins";
}
