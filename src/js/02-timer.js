import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const startBtnEl = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');

startBtnEl.addEventListener('click', onStartClick);

function onStartClick(evt) {
    console.log(evt);
}

flatpickr(input, {});