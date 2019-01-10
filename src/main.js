import { PacMan } from './pac-man';
import { buildUI } from './ui-builder';
import './styles.css';

let pac = new PacMan();

document.addEventListener('readystatechange', event => {
  if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
    buildUI();
    objset('🚽', 'hero', pac.currentPos);

    let food = pac.addObject();

    objset('💩', 'food', food.currentPos);
  }
});

document.addEventListener('keyup', (event) => {
  let prior = pac.currentPos;

  let isObstacle = [...document.getElementsByClassName('object food')].map(x=> parseInt(x.parentElement.id));

  if (pac.makeMove(event.key)) {
    let current = pac.currentPos;
    ui_redrawHero(prior, current);
    pac.movesMade++
    console.log(pac.movesMade)
  }


  if (isObstacle.includes(pac.currentPos)) {
    pac.score++;
    console.log(`Flush!\nscore: ${pac.score}`);
  }



});

function ui_redrawHero(from, to) {
  let hero = document.getElementById('hero');
  let orig = document.getElementById(from);


  let destination = document.getElementById(to);

  destination.innerText = "";
  destination.append(hero);
  orig.innerText ="•";

  let food = pac.addObject();
  objset('💩', 'food', food.currentPos);



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


//👾
// 🧠
// 🚶‍♂️
//🔪
//🧟
