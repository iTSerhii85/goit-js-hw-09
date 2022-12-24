import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");


const startBtnEl = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const leftDays = document.querySelector('[data-days]');
const leftHours = document.querySelector('[data-hours]');
const leftMinutes = document.querySelector('[data-minutes]');
const leftSeconds = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartClick);

startBtnEl.disabled = true;

const PROMPT_DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    } 
      startBtnEl.disabled = false;
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartClick() {
  let  timerId = setInterval(() => {
    const selectedTime =  new Date(input.value);
    const timeValue = selectedTime - new Date();

    startBtnEl.disabled = true;

    if (timeValue >= 0) {
      let leftTime = convertMs(timeValue);
      leftDays.textContent = leftTime.days;
      leftHours.textContent = leftTime.hours;
      leftMinutes.textContent = leftTime.minutes;
      leftSeconds.textContent = leftTime.seconds;
      } else {
        clearInterval(timerId)
        }
  },PROMPT_DELAY);
}
 