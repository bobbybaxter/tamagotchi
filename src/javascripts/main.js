import '../styles/main.scss';
import eatModule from './components/eatModule';
import playModule from './components/playModule';

const init = () => {
  eatModule.eatOnLoad();
  playModule.playOnLoad();
  eatModule.printToEat();
  playModule.printToPlay();
};

init();
