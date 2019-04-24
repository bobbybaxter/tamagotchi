import progressBar from './progressBar';
import calculations from './calculations';

const eventListeners = () => {
  document.getElementById('eatGood').addEventListener('click', calculations.calculateValues);
  document.getElementById('eatBad').addEventListener('click', calculations.calculateValues);
  document.getElementById('playMore').addEventListener('click', calculations.calculateValues);
  document.getElementById('playLess').addEventListener('click', calculations.calculateValues);
  document.getElementById('fightGood').addEventListener('click', calculations.calculateValues);
  document.getElementById('fightBad').addEventListener('click', calculations.calculateValues);
  document.getElementById('sleepMore').addEventListener('click', calculations.calculateValues);
  document.getElementById('sleepLess').addEventListener('click', calculations.calculateValues);
  document.addEventListener('click', progressBar.updateProgressBar);
};

export default { eventListeners };
