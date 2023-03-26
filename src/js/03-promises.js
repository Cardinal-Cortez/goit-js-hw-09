const form = document.querySelector(".form");
form.addEventListener("input",() => {});
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
form.addEventListener("submit", createPromise);