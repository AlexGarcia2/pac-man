import { PacMan } from './../src/pac-man';
import { Ghosts } from './../src/ghosts';


describe('PacMan', function(){

  it('should check if move is valid', function() {
    let pac = new PacMan();

    expect(pac.whereMove()).toEqual({ up:true, down:true, left:true, right:true });

  })

  it('should change current position', function(){
    let pac = new PacMan();
    let startingAt = pac.currentPos; //pacman starts at position 15
    pac.makeMove('up') //pacman moves up by an offset of 6

    expect(pac.currentPos).not.toEqual(startingAt) //pacman should now be at 9
  })

  it('should', function() {
    let pac = new PacMan();
    // let thing = pac.addObject()

    console.log(pac.addObject())

    expect(true).toEqual(true)

  })

})




// console.log(pac.whereMove())
// // pac.moveRight();
// // pac.moveRight();
// // pac.moveRight();
// // console.log(pac.makeMove('up'));
// pac.makeMove('up')
// console.log(pac.whereMove());
// pac.makeMove('up')
// console.log(pac.whereMove());
// pac.makeMove('right')
// pac.makeMove('right')
//
// console.log(pac.whereMove());
