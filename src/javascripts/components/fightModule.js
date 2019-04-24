import util from '../helpers/util';

let strength = 0;

const getStrength = () => strength;

const setStrength = (strengthValue) => {
  strength = strengthValue;
};

const printToFight = () => {
  let domString = '<button class="fight-buttons" id="fightBad">Fight a Stranger</button>';
  domString += '<button class="fight-buttons" id="fightGood">Lift Weights</button>';
  // domString += `<h4 id="strengthTotal" class="progress">${strength}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="fightBarStatus"></div>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

export default {
  setStrength, printToFight, getStrength,
};
