import util from '../helpers/util';

let strength = 0;

const getStrength = () => strength;

const setStrength = (strengthValue) => {
  strength = strengthValue;
};

const fightFunction = (e) => {
  e.preventDefault();
  let strengthLevel = getStrength();
  if (e.target.id === 'fightGood') {
    strengthLevel += 1;
    if (strengthLevel > 100) {
      strengthLevel = 100;
    }
    document.getElementById('fightBarStatus').style.width = `${strengthLevel}%`;
    setStrength(strengthLevel);
  } else {
    strengthLevel -= 10;
    if (strengthLevel < 0) {
      strengthLevel = 0;
    }
    document.getElementById('fightBarStatus').style.width = `${strengthLevel}%`;
    setStrength(strengthLevel);
  }
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
