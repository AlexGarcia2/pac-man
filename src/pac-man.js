// import { Ghosts } from './ghosts';

class PacMan {
  constructor() {
    this.playableMoves = [1,2,3,4,5,7,9,11,13,14,15,16,17,19,21,23,25,26,27,28,29];
    this.currentPos = 15; //15 is middle of the board

    this.xOffset = 6;
    this.yOffset = 1;
  }

  whereMove() {


    let up = this.playableMoves.includes(this.currentPos - this.xOffset) ? true : false;
    let down = this.playableMoves.includes(this.currentPos + this.xOffset) ? true : false;
    let left = this.playableMoves.includes(this.currentPos - this.yOffset) ? true : false;
    let right = this.playableMoves.includes(this.currentPos + this.yOffset) ? true : false;

    return { up, down, left, right }
  }

  whereAt() {
    return this.currentPos;
  }

  makeMove(pos) {
    
    switch(pos) {
      case 'up':
        if (this.whereMove().up === true) {
          this.currentPos-= this.xOffset;
        }

        break;
      case 'down':
        if (this.whereMove().down === true) {
          this.currentPos+= this.xOffset;
        }

        break;
      case 'left':
        if (this.whereMove().left === true) {
          this.currentPos-= this.yOffset;
        }

        break;
      case 'right':
        if (this.whereMove().right === true) {
          this.currentPos+= this.yOffset;
        }

        break;

    }
  }

  moveRight() {
    this.currentPos+=1
  }



}

export { PacMan };
