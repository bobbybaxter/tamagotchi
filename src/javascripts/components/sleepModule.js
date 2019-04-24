import util from '../helpers/util';

let energy = 0;

const getEnergy = () => energy;

const setEnergy = (energyValue) => {
  energy = energyValue;
};

const printToSleep = () => {
  let domString = '<button class="sleep-buttons" id="sleepLess">Nap</button>';
  domString += '<button class="sleep-buttons" id="sleepMore">Deep Sleep</button>';
  // domString += `<h4 id="energyTotal" class="progress">${energy}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="sleepBarStatus"></div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

export default {
  setEnergy, printToSleep, getEnergy,
};
