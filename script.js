//your JS code here. If required.
const container = document.getElementById("board");
const TOTAL_SQUARES = 800;

const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < TOTAL_SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;

    setTimeout(() => {
      square.style.backgroundColor = "#1d1d1d";
    }, 1000);
  });

  container.appendChild(square);
}
