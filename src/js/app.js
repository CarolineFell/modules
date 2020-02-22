console.log('app worked');

const game = new Game();
game.start();

import Game, { GameSavingData, writeGameSaving as saveGame, readGameSaving as loadGame } from './game.js';