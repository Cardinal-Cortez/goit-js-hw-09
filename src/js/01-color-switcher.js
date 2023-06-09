const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const btnChangeColor = document.querySelector('.body');

let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() =>{
    document.body.style.backgroundColor = getRandomHexColor()}, 1000);   
});

stopBtn.addEventListener("click", () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timerId);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}