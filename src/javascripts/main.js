import '../styles/main.scss';
import eatModule from './components/eatModule';
import playModule from './components/playModule';
import fightModule from './components/fightModule';

const init = () => {
  eatModule.eatOnLoad();
  playModule.playOnLoad();
  fightModule.fightOnLoad();
  eatModule.printToEat();
  playModule.printToPlay();
  fightModule.printToFight();

};

init();
