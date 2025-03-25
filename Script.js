const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
let direction = "RIGHT";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * 20, food.y * 20, 20, 20);

  // Draw snake
  ctx.fillStyle = "lime";
  snake.forEach(part => ctx.fillRect(part.x * 20, part.y * 20, 20, 20));

  // Move snake
  let newHead = {x: snake[0].x, y: snake[0].y};
  if (direction === "UP") newHead.y--;
  if (direction === "DOWN") newHead.y++;
  if (direction === "LEFT") newHead.x--;
  if (direction === "RIGHT") newHead.x++;
  
  snake.unshift(newHead);
  if (newHead.x === food.x && newHead.y === food.y) {
    food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
  } else {
    snake.pop();
  }

  setTimeout(drawGame, 200);
}

drawGame();
