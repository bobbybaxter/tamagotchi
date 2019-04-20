import util from '../helpers/util';

let energy = 50;

const sleepOnLoad = () => energy;

const sleepFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'sleepMore') {
    energy += 60;
    if (energy > 100) {
      energy = 100;
    }
    util.printToDom('energyTotal', energy);
  } else {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    util.printToDom('energyTotal', energy);
  }
};

const printToSleep = () => {
  let domString = '<button class="sleep-buttons" id="sleepMore">Deep Sleep</button>';
  domString += '<button class="sleep-buttons" id="sleepLess">Nap</button>';
  domString += `<h4 id="energyTotal">${energy}</h4>`;
  util.printToDom('sleep', domString);
  document.getElementById('sleepMore').addEventListener('click', sleepFunction);
  document.getElementById('sleepLess').addEventListener('click', sleepFunction);
};

export default { sleepOnLoad, printToSleep };
