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
  },});
