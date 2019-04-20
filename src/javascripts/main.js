import '../styles/main.scss';
import eatModule from './components/eatModule';

const init = () => {
  eatModule.eatOnLoad();
  eatModule.printToEat();
};

init();
