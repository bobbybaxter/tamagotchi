import eatModule from './eatModule';
import playModule from './playModule';
import fightModule from './fightModule';
import sleepModule from './sleepModule';

import util from '../helpers/util';

let overallProgress = 0;

const getOverallProgress = () => overallProgress;

const setOverallProgress = (progressValue) => {
  overallProgress = progressValue;
};

const calculateOverallProgress = () => {
  const full = eatModule.getFull();
  const fun = playModule.getFun();
  const strength = fightModule.getStrength();
  const energy = sleepModule.getEnergy();
  let total = Math.floor((full + fun + strength + energy) / 4);
  if (total > 100) {
    total = 100;
  } else if (total < 0) {
    total = 0;
  }
  return total;
};

const printToProgress = () => {
  const total = calculateOverallProgress();
  let domString = '<div class="progressBar">';
  domString += '<div id="overallBarStatus"></div>';
  domString += '</div>';
  util.printToDom('progress', domString);
  document.getElementById('overallBarStatus').style.width = `${total}%`;
};

const updateProgressBar = () => {
  const total = calculateOverallProgress();
  let domString = '<div class="progressBar">';
  domString += '<div id="overallBarStatus"></div>';
  domString += '</div>';
  util.printToDom('progress', domString);
  document.getElementById('overallBarStatus').style.width = `${total}%`;
};

export default {
  getOverallProgress,
  setOverallProgress,
  printToProgress,
  updateProgressBar,
  calculateOverallProgress,
};
