import util from '../helpers/util';

let energy = 0;

const getEnergy = () => energy;

const setEnergy = (energyValue) => {
  energy = energyValue;
};

const sleepFunction = (e) => {
  e.preventDefault();
  let energyLevel = getEnergy();
  if (e.target.id === 'sleepMore') {
    energyLevel += Math.floor(Math.random() * 59);
    if (energyLevel > 100) {
      energyLevel = 100;
    }
    document.getElementById('sleepBarStatus').style.width = `${energyLevel}%`;
  } else {
    energy += Math.floor(Math.random() * 49);
    if (energy > 100) {
      energy = 100;
    }
    document.getElementById('sleepBarStatus').style.width = `${energyLevel}%`;
  }
  setEnergy(energyLevel);
};

const printToSleep = () => {
  let domString = '<button class="sleep-buttons" id="sleepMore">Deep Sleep</button>';
  domString += '<button class="sleep-buttons" id="sleepLess">Nap</button>';
  // domString += `<h4 id="energyTotal" class="progress">${energy}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="sleepBarStatus"></div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  document.getElementById('sleepMore').addEventListener('click', sleepFunction);
  document.getElementById('sleepLess').addEventListener('click', sleepFunction);
};

export default { setEnergy, printToSleep, getEnergy };
