import throttle from 'lodash.throttle';

const formEl = document.querySelector('.form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  
}

function onInput(evt) {
  const formData = {
    delay: formEl.delay.value,
    step: formEl.step.value,
    amount: formEl.step.value,
  };
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
