import { PacMan } from './pac-man';
import { buildUI } from './ui-builder';
import './styles.css';


let pac = new PacMan();


document.addEventListener('readystatechange', event => {
  if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
    buildUI();
    ui_setDefault();


  }
});

document.addEventListener('keyup', (event) => {
  let prior = pac.currentPos;

  if (pac.makeMove(event.key)) {
    let current = pac.currentPos;
    ui_redrawHero(prior, current);
  }

});

function ui_redrawHero(from, to) {
  let hero = document.getElementById('hero');
  let orig = document.getElementById(from);
  let destination = document.getElementById(to);

  destination.innerText = "";
  destination.append(hero);
  orig.innerText ="•";

}

function ui_setDefault() {
  let heroImage = document.createElement('span');
  heroImage.setAttribute('id','hero');
  heroImage.innerText = '🧟';

  let startingPos = document.getElementById('15');
  startingPos.innerText = "";
  startingPos.append(heroImage);
}

//👾
// 🧠
// 🚶‍♂️
