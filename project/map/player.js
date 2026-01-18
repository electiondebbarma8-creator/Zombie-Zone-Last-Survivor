// player/player.js

export let player = {
  x: 0,
  y: 0,
  speed: 1
};

// map se player start position nikalna
export function initPlayer(gameMap) {
  gameMap.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      if (cell === "P") {
        player.x = x;
        player.y = y;
      }
    });
  });
}

// wall collision check
function canMove(x, y, gameMap) {
  if (y < 0 || y >= gameMap.length) return false;
  if (x < 0 || x >= gameMap[0].length) return false;
  return gameMap[y][x] !== "#";
}

// keyboard control
export function handlePlayerMovement(gameMap) {
  document.addEventListener("keydown", (e) => {
    let newX = player.x;
    let newY = player.y;

    if (e.key === "w" || e.key === "ArrowUp") newY--;
    if (e.key === "s" || e.key === "ArrowDown") newY++;
    if (e.key === "a" || e.key === "ArrowLeft") newX--;
    if (e.key === "d" || e.key === "ArrowRight") newX++;

    if (canMove(newX, newY, gameMap)) {
      player.x = newX;
      player.y = newY;
      console.log("Player:", player.x, player.y);
    }
  });
}
