import eatModule from './eatModule';
import playModule from './playModule';
import sleepModule from './sleepModule';

import util from '../helpers/util';

let strength = 0;

const getStrength = () => strength;

const setStrength = (strengthValue) => {
  strength = strengthValue;
};

const fightFunction = (e) => {
  e.preventDefault();
  let fullLevel = eatModule.getFull();
  let funLevel = playModule.getFun();
  let strengthLevel = getStrength();
  let energyLevel = sleepModule.getEnergy();
  if (e.target.id === 'fightGood') {
    fullLevel = util.changeAttr(fullLevel, 'minus', 10);
    funLevel = util.changeAttr(funLevel, 'plus', 5);
    strengthLevel = util.changeAttr(strengthLevel, 'plus', 25);
    energyLevel = util.changeAttr(energyLevel, 'minus', 10);
    util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  } else {
    fullLevel = util.changeAttr(fullLevel, 'minus', 10);
    funLevel = util.changeAttr(funLevel, 'plus', 5);
    strengthLevel = util.changeAttr(strengthLevel, 'minus', 10);
    energyLevel = util.changeAttr(energyLevel, 'minus', 25);
    util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  }
  eatModule.setFull(fullLevel);
  playModule.setFun(funLevel);
  setStrength(strengthLevel);
  sleepModule.setEnergy(energyLevel);
};

const printToFight = () => {
  let domString = '<button class="fight-buttons" id="fightBad">Fight a Stranger</button>';
  domString += '<button class="fight-buttons" id="fightGood">Lift Weights</button>';
  // domString += `<h4 id="strengthTotal" class="progress">${strength}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="fightBarStatus"></div>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('fightGood').addEventListener('click', fightFunction);
  document.getElementById('fightBad').addEventListener('click', fightFunction);
};

export default { setStrength, printToFight, getStrength };
