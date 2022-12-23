function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  console.log(startBtn);
  console.log(stopBtn);

  startBtn.addEventListener('click', onClickStart);
  stopBtn.addEventListener('click', onClickStop);

  let timerId = null;

  function onClickStart(evt) {
    startBtn.disabled = true;
    
    timerId = setInterval(() => {console.log(evt)}, 1000);
  };

  function onClickStop(evt) {
    startBtn.disabled = false;
    clearInterval(timerId);
  };