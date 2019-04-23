import util from '../helpers/util';

let fun = 0;

const getFun = () => fun;

const setFun = (funValue) => {
  fun = funValue;
};

const playFunction = (e) => {
  e.preventDefault();
  let funLevel = getFun();
  if (e.target.id === 'playMore') {
    funLevel += Math.floor(Math.random() * 49);
    if (funLevel > 100) {
      funLevel = 100;
    }
    document.getElementById('playBarStatus').style.width = `${funLevel}%`;
  } else {
    funLevel += Math.floor(Math.random() * 9);
    if (funLevel > 100) {
      funLevel = 100;
    }
    document.getElementById('playBarStatus').style.width = `${funLevel}%`;
  }
  setFun(funLevel);
};

const printToPlay = () => {
  let domString = '<button class="play-buttons" id="playLess">Play a Game</button>';
  domString += '<button class="play-buttons" id="playMore">Play Guitar</button>';
  // domString += `<h4 id="funTotal" class="progress">${fun}</h4>`;
  domString += '<div class="progressBar">';
  domString += '<div id="playBarStatus"></div>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('playMore').addEventListener('click', playFunction);
  document.getElementById('playLess').addEventListener('click', playFunction);
};

export default { setFun, printToPlay, getFun };
