import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");


const startBtnEl = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartClick);

startBtnEl.disabled = true;

const dataNow = new Date();

function onStartClick(evt) {
    console.log(evt);
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataSelect = selectedDates[0];
    if (dataSelect <= dataNow){
      alert("Please choose a date in the future");
    }
    startBtnEl.disabled = false;
    const restTime = dataSelect.getTime() - dataNow.getTime();
    convertMs(restTime)
  },});

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  console.log(convertMs());