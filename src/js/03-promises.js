// Импорт алерта
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const obj = {
    position: position,
    delay: delay,
  };

  if (shouldResolve) {
    // Fulfill
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout((delay) => {
        resolve(obj);
      }, delay);
    })
    .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
  } else {
    // Reject
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout((delay) => {
        reject(obj);
      }, delay);
    })
    .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
}

const inputForm = document.querySelector('.form')

inputForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = parseInt(event.target.elements.delay.value);
  const step = parseInt(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay);

    delay = delay + step;
  }
}

