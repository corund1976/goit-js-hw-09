function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColor = getRandomHexColor();
let timerId = null;

const buttonStartNode = document.querySelector('button[data-start]');
const buttonStopNode = document.querySelector('button[data-stop]');

const onStopClick = () => {
    clearInterval(timerId);
    document.body.style.backgroundColor = currentColor;
    buttonStartNode.addEventListener('click', onStartClick);
};

const onStartClick = () => {
    buttonStartNode.removeEventListener('click', onStartClick);
    buttonStopNode.addEventListener('click', onStopClick);
    timerId = setInterval(() => {
        const currentColor = getRandomHexColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);
}

buttonStartNode.addEventListener('click', onStartClick);
    
    

