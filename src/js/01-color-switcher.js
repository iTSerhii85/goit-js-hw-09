function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', onClickStart);
stopBtnEl.addEventListener('click', onClickStop);

let timerId = null;

function onClickStart() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  timerId = setInterval(changeColor, 1000);
}

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function onClickStop() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(timerId);
}