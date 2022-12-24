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

// startBtnEl.disabled = true;
// if (dataSelect <= dataNow){
//   alert("Please choose a date in the future");
// }
// startBtnEl.disabled = false;

const dataNow = new Date();

function onStartClick(evt) {
    setInterval(new Date(), 1000);
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0].getTime();
    startDate = dataNow.getTime();
    // console.log(startDate);
    finallyDate = deadline - startDate;
  
    leftTime = convertMs(finallyDate);
    leftDays.textContent = leftTime.days;
    leftHours.textContent = leftTime.hours;
    leftMinutes.textContent = leftTime.minutes;
    leftSeconds.textContent = leftTime.seconds;

  },});

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  