import { PacMan } from './../src/pac-man';

describe('PacMan', function(){

  it('should spawn a new pacman', function() {
    let pac = new PacMan();

    console.log(pac.whereMove())
    // pac.moveRight();
    // pac.moveRight();
    // pac.moveRight();
    // console.log(pac.makeMove('up'));
    pac.makeMove('up')
    console.log(pac.whereMove());
    pac.makeMove('up')
    console.log(pac.whereMove());
    pac.makeMove('right')
    pac.makeMove('right')
    
    console.log(pac.whereMove());







    expect(true).toEqual(true);


  })
})
