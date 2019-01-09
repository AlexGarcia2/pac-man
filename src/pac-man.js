// import { Ghosts } from './ghosts';

class PacMan {
  constructor() {
    this.playableMoves = [1,2,3,4,5,7,9,11,13,14,15,16,17,19,21,23,25,26,27,28,29];
    this.currentPos = 15;



  }

  whereMove() {
    const xOffset = 6;
    const yOffset = 1;
    let up = this.playableMoves.includes(this.currentPos - xOffset) ? true : false;
    let down = this.playableMoves.includes(this.currentPos + xOffset) ? true : false;
    let left = this.playableMoves.includes(this.currentPos - yOffset) ? true : false;
    let right = this.playableMoves.includes(this.currentPos + yOffset) ? true : false;

    return { up, down, left, right }
    // this.playableMoves.includes()

  }

  whereAt() {
    return this.currentPos;
  }

  test() {
    return 'it work!'
  }

  moveRight() {
    this.currentPos+=1
  }



}

export { PacMan };
