const grid = document.querySelector('.grid');
const dimension = parseInt(prompt('What is the dimension of the grid?'));
const gridWidth = grid.clientWidth / dimension;
const gridHeight = grid.clientHeight / dimension;

const buttons = document.getElementsByTagName('button');

let selectedColor = null;
let isRandomizerClicked = false;

function getRandomValue() {
    return Math.floor(Math.random() * 255);
};

function setClickedButton(event, buttons) {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    for (let button of buttons) {
        if (event.target !== button) {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        } 
    }
};

for (let i = 0; i < dimension**2; i++) {
    const cell = document.createElement('div');
    cell.style.width = `${gridWidth}px`;
    cell.style.height = `${gridHeight}px`;
    grid.appendChild(cell);
};

buttons[1].addEventListener('click', event => {
    setClickedButton(event, buttons);
    isRandomizerClicked = true;
});

buttons[0].addEventListener('click', event => {
    setClickedButton(event, buttons);
    isRandomizerClicked = false;
    selectedColor = 'rgb(255, 255, 255)';
});

buttons[2].addEventListener('click', event => {
    setClickedButton(event, buttons);
    isRandomizerClicked = false;
    grid.childNodes.forEach(cell => cell.style.backgroundColor = 'rgb(255, 255, 255)');
});

grid.addEventListener('mouseover', event => {
    if (event.currentTarget !== event.target) {
        if (isRandomizerClicked) {
            selectedColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
        }
        event.target.style.backgroundColor = selectedColor;
    }
});