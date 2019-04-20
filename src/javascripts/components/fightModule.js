import util from '../helpers/util';

let strength = 100;

const fightOnLoad = () => strength;

const fightFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'fightGood') {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    document.getElementById('fightBarStatus').style.width = `${strength}%`;
    // util.printToDom('strengthTotal', strength);
  } else {
    strength -= 10;
    if (strength < 0) {
      strength = 0;
    }
    document.getElementById('fightBarStatus').style.width = `${strength}%`;
    // util.printToDom('strengthTotal', strength);
  }
};

const printToFight = () => {
  let domString = '<button class="fight-buttons" id="fightGood">Lift Weights</button>';
  domString += '<button class="fight-buttons" id="fightBad">Fight a Stranger</button>';
  // domString += `<h4 id="strengthTotal" class="progress">${strength}</h4>`;
  domString += '<div id="progressBar">';
  domString += '<div id="fightBarStatus"></div>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('fightGood').addEventListener('click', fightFunction);
  document.getElementById('fightBad').addEventListener('click', fightFunction);
};

export default { fightOnLoad, printToFight };
