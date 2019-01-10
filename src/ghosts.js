import {roulette} from './roulette';

class Ghosts {
  constructor(board,pacPos) {
    this.name = 'clyde';
    this.currentPos = board[board.indexOf(pacPos)+ roulette()];
  }

}

export { Ghosts };
