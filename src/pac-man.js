import { Foods } from './food';
// import { Fruits } from './fruits';

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

    return { up, down, left, right };
  }

  makeMove(pos) {
    // console.log(pos)
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
    let foodRespawn = this.playableMoves.filter(x => x!= this.currentPos)
    return new Foods(foodRespawn[Math.floor((Math.random()*foodRespawn.length))]);
  }

}

export { PacMan };
