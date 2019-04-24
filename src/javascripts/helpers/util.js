const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const changeAttr = (attr, oper, val) => {
  let newAttr = attr;
  if (oper === 'plus') {
    newAttr += Math.floor(Math.random() * val) + 1;
    if (newAttr > 100) {
      newAttr = 100;
    }
  } else if (oper === 'minus') {
    newAttr -= Math.floor(Math.random() * val) + 1;
    if (newAttr < 0) {
      newAttr = 0;
    }
  }
  return newAttr;
};

const setProgressBars = (a, b, c, d) => {
  document.getElementById('eatBarStatus').style.width = `${a}%`;
  document.getElementById('playBarStatus').style.width = `${b}%`;
  document.getElementById('fightBarStatus').style.width = `${c}%`;
  document.getElementById('sleepBarStatus').style.width = `${d}%`;
};

export default { printToDom, changeAttr, setProgressBars };
