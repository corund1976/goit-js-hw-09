// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// =================================================================================

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const inputForm = document.querySelector('#date-selector');

inputForm.addEventListener('change', selectDate);

function selectDate() {
    const selectedDate = new Date(inputForm.value);
    if (selectedDate > currentDate) {
        // convertMs(selectedDate - currentDate);
        console.log(convertMs(selectedDate - currentDate));
        
    }
}


const currentDate = new Date();


// flatpickr(selector, options)

// window.alert("Please choose a date in the future");

// Напиши функцию addLeadingZero(value),
// которая использует метод метод padStart() 
// и перед отрисовкой интефрейса форматируй значение.