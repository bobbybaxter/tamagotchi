import '../styles/main.scss';
import eatModule from './components/eatModule';
import playModule from './components/playModule';
import fightModule from './components/fightModule';
import sleepModule from './components/sleepModule';

const init = () => {
  eatModule.eatOnLoad();
  playModule.playOnLoad();
  fightModule.fightOnLoad();
  sleepModule.sleepOnLoad();
  eatModule.printToEat();
  playModule.printToPlay();
  fightModule.printToFight();
  sleepModule.printToSleep();
};

init();
