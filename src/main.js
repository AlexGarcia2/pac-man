import { PacMan } from './pac-man';
import { buildUI } from './ui-builder';
import './styles.css';

let pac = new PacMan(); //instantiate game

document.addEventListener('readystatechange', event => {
  if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
    loadGame();
  }
});

document.addEventListener('keyup', (event) => {
  setInterval(() => {pac.timer++;}, 1000);
  moveMade(event);
});

function redraw(from, to) {
  let hero = document.getElementById('hero');
  let orig = document.getElementById(from);
  let destination = document.getElementById(to);

  destination.innerText = "";
  destination.append(hero);
  orig.innerText ="•";

  if (pac.movesMade % 2) {
    let food = pac.addObject();
    objset('💩', 'food', food.currentPos);
  }
}

function objset(icon, attr, pos) {
  let heroImage = document.createElement('span');
  heroImage.setAttribute('id', attr);
  heroImage.setAttribute('class', `object ${attr}`);
  heroImage.innerText = icon;

  let startingPos = document.getElementById(pos);
  startingPos.innerText = "";
  startingPos.append(heroImage);
}

function loadGame() {
  buildUI();
  objset('🚽', 'hero', pac.currentPos);
  let food = pac.addObject();
  objset('💩', 'food', food.currentPos);
}

function moveMade() {
  let prior = pac.currentPos;
  let isObstacle = [...document.getElementsByClassName('object food')].map(x=> parseInt(x.parentElement.id));

  if (pac.makeMove(event.key)) {
    let current = pac.currentPos;
    redraw(prior, current);
    pac.movesMade++;
  }

  if (isObstacle.includes(pac.currentPos)) {
    updateScore();

  }

  function updateScore() {
    pac.score++;
    console.log(`Flush!\nscore: ${pac.score}`);
  }

}
