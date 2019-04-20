import util from '../helpers/util';

const printToEat = () => {
  let domString = '<button class="eat-buttons" id="eatGood">Feed Healthy Food</button>';
  domString += '<button class="eat-buttons" id="eatBad">Feed Junk Food</button>';
  util.printToDom('eat', domString);
};

export default { printToEat };
