// Импорт календаря
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// Импорт алерта
import Notiflix from 'notiflix';

// = Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты===========================================================================

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
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// =================================================================================
const inputForm = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');

const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

startButton.disabled = true;

let countDown = {};
let currentDate = new Date();
let selectedDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      selectedDate = selectedDates[0];
    if (selectedDate > currentDate) {
        startButton.disabled = false;
    } else {
        Notiflix.Notify.warning('Please choose a date in the future');
        // window.alert("Please choose a date in the future");
    }
  },
};

flatpickr(inputForm, options);

startButton.addEventListener('click', onClick);

function onClick() {
    const timerId = setInterval(() => {
        currentDate = new Date();

        if (currentDate < selectedDate) {
            countDown = convertMs(selectedDate - currentDate);
            showCountDown(countDown);
        } else {
            clearInterval(timerId);
        }
    }, 1000);
};
    
function showCountDown(countDown) {
    daysSpan.textContent = addLeadingZero(countDown.days);
    hoursSpan.textContent = addLeadingZero(countDown.hours);
    minutesSpan.textContent = addLeadingZero(countDown.minutes);
    secondsSpan.textContent = addLeadingZero(countDown.seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}