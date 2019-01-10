export function roulette (){
  const randomPos = [-2,2,-3,3];
  let index = Math.floor((Math.random()*4));

  return randomPos[index];
}
