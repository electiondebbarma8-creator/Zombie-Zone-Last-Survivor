const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sounds
const gunSound = document.getElementById("gunSound");
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3;
bgMusic.play();

// Player
let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 30,
  speed: 5
};

// Controls
let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Shoot
canvas.addEventListener("click", () => {
  gunSound.currentTime = 0;
  gunSound.play();
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Movement
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;

  // Player draw
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  requestAnimationFrame(gameLoop);
}

gameLoop();
