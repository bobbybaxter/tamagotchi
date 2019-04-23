import util from '../helpers/util';

let full = 0;

const getFull = () => full;

const setFull = (fullValue) => {
  full = fullValue;
};

const eatFunction = (e) => {
  e.preventDefault();
  let fullness = getFull();
  if (e.target.id === 'eatGood') {
    fullness += 10;
    if (fullness > 100) {
      fullness = 100;
    }
    document.getElementById('eatBarStatus').style.width = `${fullness}%`;
    setFull(fullness);
  } else {
    fullness -= 3;
    if (fullness < 0) {
      fullness = 0;
    }
    document.getElementById('eatBarStatus').style.width = `${fullness}%`;
  }
  setFull(fullness);
};

const printToEat = () => {
  let domString = '<button class="eat-buttons" id="eatBad">Feed Junk Food</button>';
  domString += '<button class="eat-buttons" id="eatGood">Feed Healthy Food</button>';
  // domString += `<h4 id="fullTotal" class="progress">${full}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="eatBarStatus"></div>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('eatGood').addEventListener('click', eatFunction);
  document.getElementById('eatBad').addEventListener('click', eatFunction);
};

export default { setFull, printToEat, getFull };
