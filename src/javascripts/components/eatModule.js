import playModule from './playModule';
import fightModule from './fightModule';
import sleepModule from './sleepModule';

import util from '../helpers/util';

let full = 0;

const getFull = () => full;

const setFull = (fullValue) => {
  full = fullValue;
};

const eatFunction = (e) => {
  e.preventDefault();
  let fullLevel = getFull();
  let funLevel = playModule.getFun();
  let strengthLevel = fightModule.getStrength();
  let energyLevel = sleepModule.getEnergy();
  if (e.target.id === 'eatGood') {
    fullLevel = util.changeAttr(fullLevel, 'plus', 25);
    funLevel = util.changeAttr(funLevel, 'minus', 5);
    strengthLevel = util.changeAttr(strengthLevel, 'plus', 5);
    energyLevel = util.changeAttr(energyLevel, 'plus', 10);
    util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  } else {
    fullLevel = util.changeAttr(fullLevel, 'minus', 5);
    funLevel = util.changeAttr(funLevel, 'plus', 5);
    strengthLevel = util.changeAttr(strengthLevel, 'minus', 5);
    energyLevel = util.changeAttr(energyLevel, 'plus', 25);
    util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  }
  setFull(fullLevel);
  playModule.setFun(funLevel);
  fightModule.setStrength(strengthLevel);
  sleepModule.setEnergy(energyLevel);
};

const printToEat = () => {
  let domString = '<button class="eat-buttons" id="eatBad">Feed Junk Food</button>';
  domString += '<button class="eat-buttons" id="eatGood">Feed Healthy Food</button>';
  // domString += `<h4 id="fullTotal" class="progress">${full}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="eatBarStatus"></div>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('eatGood').addEventListener('click', eatFunction);
  document.getElementById('eatBad').addEventListener('click', eatFunction);
};

export default { setFull, printToEat, getFull };
