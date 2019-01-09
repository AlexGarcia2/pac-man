import { PacMan } from './../src/pac-man';

describe('PacMan', function(){

  it('should spawn a new pacman', function() {
    let pac = new PacMan();

    console.log(pac.whereMove())
    pac.moveRight();
    // pac.moveRight();
    // pac.moveRight();
    console.log(pac.whereAt());
    console.log(pac.whereMove());



    expect(pac.test()).toEqual('it work!');


  })
})
