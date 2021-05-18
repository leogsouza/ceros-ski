import '../css/game.css';
import { Game } from './Core/Game.js';
import * as Constants from './Constants';

let skiGame;

document.addEventListener("DOMContentLoaded",() => {
    startGame();
});

function startGame() {
    skiGame = new Game();
    skiGame.load().then(() => {
        skiGame.init();
        skiGame.run();
    });
};

document.addEventListener('keydown', handleStartGame)


function handleStartGame(event) {
    if (event.which === Constants.KEYS.F3 && skiGame.isOver) {
        startGame();
        
    }
    event.preventDefault();
};