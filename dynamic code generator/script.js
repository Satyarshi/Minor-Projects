const button = document.getElementById("button");
const quotes = [
  "Success is built one small step at a time.",
  "Discipline will take you places motivation cannot.",
  "Every expert was once a beginner.",
  "Consistency beats intensity when practiced daily.",
  "Your future is shaped by today's actions.",
  "Progress, not perfection, is the goal.",
  "Great things grow from small beginnings.",
  "The hardest part is often just starting.",
  "Learning never exhausts the mind.",
  "Challenges are opportunities in disguise.",
  "Stay patient; meaningful results take time.",
  "Dream big, but work bigger.",
  "Mistakes are proof that you're trying.",
  "Confidence comes from preparation and practice.",
  "Small improvements create remarkable outcomes.",
  "Focus on the process, not just the result.",
  "Success follows those who refuse to quit.",
  "The best investment is in yourself.",
  "Keep moving forward, even at a slow pace.",
  "Your only limit is the one you accept.",
];

button.addEventListener("click", (event) => {
  if (event.key === "Enter" || event.type === "click") {
    const box = document.querySelector(".box");
    box.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }
});


document.addEventListener("mousemove", (event) => {
  console.log(event.clientX, event.clientY);
});
