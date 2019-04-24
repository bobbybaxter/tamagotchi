import eatModule from './eatModule';
import playModule from './playModule';
import fightModule from './fightModule';
import sleepModule from './sleepModule';
import petPicture from './petPicture';

import util from '../helpers/util';

const calculateValues = (e) => {
  e.preventDefault();
  let fullLevel = eatModule.getFull();
  let funLevel = playModule.getFun();
  let strengthLevel = fightModule.getStrength();
  let energyLevel = sleepModule.getEnergy();
  switch (e.target.id) {
    case 'eatGood':
      fullLevel = util.changeAttr(fullLevel, 'plus', 25);
      funLevel = util.changeAttr(funLevel, 'minus', 5);
      strengthLevel = util.changeAttr(strengthLevel, 'plus', 5);
      energyLevel = util.changeAttr(energyLevel, 'plus', 10);
      break;
    case 'eatBad':
      fullLevel = util.changeAttr(fullLevel, 'plus', 5);
      funLevel = util.changeAttr(funLevel, 'plus', 5);
      strengthLevel = util.changeAttr(strengthLevel, 'minus', 5);
      energyLevel = util.changeAttr(energyLevel, 'plus', 25);
      break;
    case 'playMore':
      fullLevel = util.changeAttr(fullLevel, 'minus', 10);
      funLevel = util.changeAttr(funLevel, 'plus', 25);
      strengthLevel = util.changeAttr(strengthLevel, 'plus', 5);
      energyLevel = util.changeAttr(energyLevel, 'minus', 10);
      break;
    case 'playLess':
      fullLevel = util.changeAttr(fullLevel, 'minus', 5);
      funLevel = util.changeAttr(funLevel, 'plus', 10);
      strengthLevel = util.changeAttr(strengthLevel, 'minus', 5);
      energyLevel = util.changeAttr(energyLevel, 'minus', 5);
      break;
    case 'fightGood':
      fullLevel = util.changeAttr(fullLevel, 'minus', 10);
      funLevel = util.changeAttr(funLevel, 'plus', 5);
      strengthLevel = util.changeAttr(strengthLevel, 'plus', 25);
      energyLevel = util.changeAttr(energyLevel, 'minus', 10);
      break;
    case 'fightBad':
      fullLevel = util.changeAttr(fullLevel, 'minus', 10);
      funLevel = util.changeAttr(funLevel, 'minus', 10);
      strengthLevel = util.changeAttr(strengthLevel, 'minus', 10);
      energyLevel = util.changeAttr(energyLevel, 'minus', 25);
      break;
    case 'sleepMore':
      fullLevel = util.changeAttr(fullLevel, 'minus', 25);
      funLevel = util.changeAttr(funLevel, 'minus', 5);
      strengthLevel = util.changeAttr(strengthLevel, 'plus', 10);
      energyLevel = util.changeAttr(energyLevel, 'plus', 25);
      break;
    case 'sleepLess':
      fullLevel = util.changeAttr(fullLevel, 'minus', 10);
      funLevel = util.changeAttr(funLevel, 'minus', 5);
      strengthLevel = util.changeAttr(strengthLevel, 'plus', 5);
      energyLevel = util.changeAttr(energyLevel, 'plus', 10);
      break;
    default:
      util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  }
  util.setProgressBars(fullLevel, funLevel, strengthLevel, energyLevel);
  eatModule.setFull(fullLevel);
  playModule.setFun(funLevel);
  fightModule.setStrength(strengthLevel);
  sleepModule.setEnergy(energyLevel);
  petPicture.printPetPicture();
};

export default { calculateValues };
