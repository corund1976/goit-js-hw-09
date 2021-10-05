function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColor = getRandomHexColor();
let timerId = null;

const buttonStartNode = document.querySelector('button[data-start]');
const buttonStopNode = document.querySelector('button[data-stop]');

buttonStartNode.disabled = false;

const onStartClick = () => {
    // buttonStartNode.removeEventListener('click', onStartClick);
    buttonStartNode.disabled = true;
    timerId = setInterval(() => {
        const currentColor = getRandomHexColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);
}    

const onStopClick = () => {
    // buttonStartNode.addEventListener('click', onStartClick);
    buttonStartNode.disabled = false;
    clearInterval(timerId);
    document.body.style.backgroundColor = currentColor;
    buttonStartNode.addEventListener('click', onStartClick);
};

buttonStartNode.addEventListener('click', onStartClick);
buttonStopNode.addEventListener('click', onStopClick);

