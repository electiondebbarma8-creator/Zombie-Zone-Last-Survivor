import gameMap from "./maps/map.js";
console.log(gameMap);
let playerX = 0;
let playerY = 0;

gameMap.forEach((row, y) => {
  row.split("").forEach((cell, x) => {
    if (cell === "P") {
      playerX = x;
      playerY = y;
    }
  });
});

console.log("Player Start:", playerX, playerY);
import gameMap from "./maps/map.js";
import { player, initPlayer, handlePlayerMovement } from "./player/player.js";

initPlayer(gameMap);
handlePlayerMovement(gameMap);

console.log("Game Started");
