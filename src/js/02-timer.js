// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const calendar = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");

let selectedDate = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
          startBtn.disabled = true;
          Notiflix.Report.failure("Please choose a date in the future") 
        }
        startBtn.disabled = false;
        selectedDate = selectedDates[0];
        return;
    },
    start(){
      calendar.disabled = true; // зробив таке бо при виборі календаря додається час при цьому не натискаючи кнопку старт
      startBtn.disabled = true;
      const timerId = setInterval(() => {
      const ms = selectedDate - Date.now();
      
      const convert = convertMs(ms);
      
      daysEl.textContent = convert.days;
      hoursEl.textContent = convert.hours;
      minutesEl.textContent = convert.minutes;
      secondsEl.textContent = convert.seconds;
    if (ms <= 0){
    clearInterval(timerId);
    return;
  }
 },1000);
    }
  };
  startBtn.disabled = true;

flatpickr(calendar, options);

startBtn.addEventListener("click", options.start);



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
   return String(value).padStart(2, "0");
  }
  