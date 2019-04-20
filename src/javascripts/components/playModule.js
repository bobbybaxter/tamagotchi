import util from '../helpers/util';

let fun = 50;

const playOnLoad = () => fun;

const playFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'playMore') {
    fun += 60;
    if (fun > 100) {
      fun = 100;
    }
    util.printToDom('funTotal', fun);
  } else {
    fun += 2;
    if (fun > 100) {
      fun = 100;
    }
    util.printToDom('funTotal', fun);
  }
};

const printToPlay = () => {
  let domString = '<button class="play-buttons" id="playMore">Play Guitar</button>';
  domString += '<button class="play-buttons" id="playLess">Play a Game</button>';
  domString += `<h4 id="funTotal">${fun}</h4>`;
  util.printToDom('play', domString);
  document.getElementById('playMore').addEventListener('click', playFunction);
  document.getElementById('playLess').addEventListener('click', playFunction);
};

export default { playOnLoad, printToPlay };