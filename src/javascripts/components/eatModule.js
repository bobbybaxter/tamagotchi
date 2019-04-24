import util from '../helpers/util';

let full = 0;

const getFull = () => full;

const setFull = (fullValue) => {
  full = fullValue;
};

const printToEat = () => {
  let domString = '<button class="eat-buttons" id="eatBad">Feed Junk Food</button>';
  domString += '<button class="eat-buttons" id="eatGood">Feed Healthy Food</button>';
  // domString += `<h4 id="fullTotal" class="progress">${full}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="eatBarStatus"></div>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

export default {
  setFull, printToEat, getFull,
};
