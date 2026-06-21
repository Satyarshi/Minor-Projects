document.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 50}px`;
  circle.style.top = `${y - 50}px`;

  colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = randomColor;

  text = ["Hello", "Welcome", "Hi", "Hey", "Greetings", "Salutations"];
  const randomText = text[Math.floor(Math.random() * text.length)];
  circle.innerText = randomText;
  document.body.appendChild(circle);
});
