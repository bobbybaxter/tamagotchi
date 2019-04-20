import util from '../helpers/util';

let full = 100;

const eatOnLoad = () => full;

const eatFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'eatGood') {
    full += 10;
    if (full > 100) {
      full = 100;
    }
    util.printToDom('fullTotal', full);
  } else {
    full -= 3;
    if (full < 0) {
      full = 0;
    }
    util.printToDom('fullTotal', full);
  }
};

const printToEat = () => {
  let domString = '<button class="eat-buttons" id="eatGood">Feed Healthy Food</button>';
  domString += '<button class="eat-buttons" id="eatBad">Feed Junk Food</button>';
  domString += `<h4 id="fullTotal">${full}</h4>`;
  util.printToDom('eat', domString);
  document.getElementById('eatGood').addEventListener('click', eatFunction);
  document.getElementById('eatBad').addEventListener('click', eatFunction);
};

export default { eatOnLoad, printToEat };
