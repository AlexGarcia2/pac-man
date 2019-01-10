import { PacMan } from './pac-man';
import { buildUI } from './ui-builder';
import './styles.css';

let pac = new PacMan();


document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    // console.log(pac.currentPos);
    buildUI();
  }

  if (event.target.readyState === 'ready') {
    // let click = docum
  }


});

document.addEventListener('keyup', (event) => {
  const valid = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

  // if event.key.toString.includes(valid) {
  //   console.log('good!')
  // }
  // event.key.filter
  console.log(event.key)
});
