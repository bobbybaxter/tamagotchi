import util from '../helpers/util';

let fun = 0;

const getFun = () => fun;

const setFun = (funValue) => {
  fun = funValue;
};

const printToPlay = () => {
  let domString = '<button class="play-buttons" id="playLess">Play a Game</button>';
  domString += '<button class="play-buttons" id="playMore">Play Guitar</button>';
  // domString += `<h4 id="funTotal" class="progress">${fun}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="playBarStatus"></div>';
  domString += '</div>';
  util.printToDom('play', domString);
};

export default {
  setFun, printToPlay, getFun,
};
