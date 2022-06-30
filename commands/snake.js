const SnakeGame = require('snakecord');
const Discord = require("discord.js");

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: true,
    gameOverTitle: "Game Over "
});


module.exports = {
    name: 'snake',
    description: 'none',
  category: "Fun",  
  usage: "snake",
    async run(bot, message, args){ 
    snakeGame.newGame(message);
  },
};