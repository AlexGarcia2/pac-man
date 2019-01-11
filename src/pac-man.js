import { Foods } from './food';

class PacMan {
  constructor() {
    this.playableMoves = [1,2,3,4,5,7,9,11,13,14,15,16,17,19,21,23,25,26,27,28,29];
    this.currentPos = 15;

    this.xOffset = 6;
    this.yOffset = 1;

    this.score = 0;
    this.movesMade = 0;

    this.timer = 60;
  }

  whereMove() {
    let up = this.playableMoves.includes(this.currentPos - this.xOffset) ? true : false;
    let down = this.playableMoves.includes(this.currentPos + this.xOffset) ? true : false;
    let left = this.playableMoves.includes(this.currentPos - this.yOffset) ? true : false;
    let right = this.playableMoves.includes(this.currentPos + this.yOffset) ? true : false;

    return { up, down, left, right };
  }

  makeMove(pos) {
    switch(pos) {
    case 'ArrowUp':
      if (this.whereMove().up === true) {
        this.currentPos-= this.xOffset;
        return true;
      }
      return false;
    case 'ArrowDown':
      if (this.whereMove().down === true) {
        this.currentPos+= this.xOffset;
        return true;
      }
      return false;
    case 'ArrowLeft':
      if (this.whereMove().left === true) {
        this.currentPos-= this.yOffset;
        return true;
      }
      return false;
    case 'ArrowRight':
      if (this.whereMove().right === true) {
        this.currentPos+= this.yOffset;
        return true;
      }
      return false;
    }
  }

  addObject() {
    let isOccupied = [...document.getElementsByClassName('object')].map(x=> parseInt(x.parentElement.id));
    let renderHere = this.whatsFree(isOccupied);

    return new Foods(renderHere[Math.floor((Math.random()*renderHere.length))]);
  }

  whatsFree(occupied) {
    let clonedBoard = [];
    for (let i=0; i<this.playableMoves.length; i++) {
      clonedBoard.push(this.playableMoves[i]);
    }
    for (let i=0; i< occupied.length; i++) {
      clonedBoard = clonedBoard.filter((x) => x != occupied[i]);
    }
    return clonedBoard;
  }

}

export { PacMan };
