import eatModule from './eatModule';
import playModule from './playModule';
import fightModule from './fightModule';
import sleepModule from './sleepModule';
import progressBar from './progressBar';

import util from '../helpers/util';
import exList from '../helpers/expressions';

const setPetPicture = () => {
  const fullLevel = eatModule.getFull();
  const funLevel = playModule.getFun();
  const strengthLevel = fightModule.getStrength();
  const energyLevel = sleepModule.getEnergy();
  const overallProgress = progressBar.calculateOverallProgress();
  // console.error(expressions.expressions.confused2);
  let currentMood = '';
  if (overallProgress === 0) {
    currentMood = exList.expressions.dead;
  } else if (fullLevel === 0) {
    currentMood = exList.expressions.sad2;
  } else if (funLevel === 0) {
    currentMood = exList.expressions.mad3;
  } else if (strengthLevel === 0) {
    currentMood = exList.expressions.tired2;
  } else if (energyLevel === 0) {
    currentMood = exList.expressions.sleepy;
  } else if (fullLevel < 25) {
    currentMood = exList.expressions.sad;
  } else if (funLevel < 25) {
    currentMood = exList.expressions.mad;
  } else if (strengthLevel < 25) {
    currentMood = exList.expressions.tired2;
  } else if (energyLevel < 25) {
    currentMood = exList.expressions.mad4;
  } else if (overallProgress === 100) {
    currentMood = exList.expressions.happy;
  } else if (fullLevel === 100) {
    currentMood = exList.expressions.happy2;
  } else if (funLevel === 100) {
    currentMood = exList.expressions.happy3;
  } else if (strengthLevel === 100) {
    currentMood = exList.expressions.mad2;
  } else if (energyLevel === 100) {
    currentMood = exList.expressions.scared;
  } else if (overallProgress < 25) {
    currentMood = exList.expressions.confused2;
  } else {
    currentMood = exList.expressions.happy4;
  }
  return currentMood;
};

const printPetPicture = () => {
  const currentMood = setPetPicture();
  const domString = `<img id="pet-picture" src="${currentMood}">`;
  // domString += `<p>${currentMood}</p>`;
  // domString += '</div>';
  util.printToDom('pet', domString);
};

export default { setPetPicture, printPetPicture };
