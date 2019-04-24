import eatModule from './eatModule';
import playModule from './playModule';
import fightModule from './fightModule';
import sleepModule from './sleepModule';
import progressBar from './progressBar';
import events from './events';

import initValues from '../helpers/initialValues';
// import util from '../helpers/util';

const tamagotchiPageLoad = () => {
  const fullLevel = initValues.getInitValues().full;
  const funLevel = initValues.getInitValues().fun;
  const strengthLevel = initValues.getInitValues().strength;
  const energyLevel = initValues.getInitValues().energy;
  eatModule.setFull(fullLevel);
  playModule.setFun(funLevel);
  fightModule.setStrength(strengthLevel);
  sleepModule.setEnergy(energyLevel);
  eatModule.printToEat();
  playModule.printToPlay();
  fightModule.printToFight();
  sleepModule.printToSleep();
  progressBar.printToProgress();
};

const makeTamagotchi = () => {
  tamagotchiPageLoad();
  events.eventListeners();
};

export default { makeTamagotchi };
