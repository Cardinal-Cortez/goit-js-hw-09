const form = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
  promise
    .then(() => console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
    .catch(() => console.log(`❌ Rejected promise ${position} in ${delay}ms`));
  return promise;
}

function startPromise(event) {
  event.preventDefault();
  const firstDelay = Number(form.querySelector('input[name = "delay"]').value);
  const delayStep = Number(form.querySelector('input[name = "step"]').value);
  const amount = Number(form.querySelector('input[name = "amount"]').value);

  let delay = firstDelay;
  const promises = [];
  for (let position = 1; position <= amount; position++) {
    const promise = createPromise(position, delay);
    promises.push(promise);
    delay += delayStep;
  }
}

form.addEventListener("submit", startPromise);