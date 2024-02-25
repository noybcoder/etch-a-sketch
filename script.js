const buttons = document.querySelector('.buttons-wrapper');
const selector = document.querySelector('.selector-wrapper');
const randomizer = document.getElementById('randomizer');
const darkener = document.getElementById('darkener');
const eraser = document.getElementById('eraser');
const sweeper = document.getElementById('sweeper');

const rangeSlider = document.getElementById('dimension');
const grid = document.querySelector('.grid-wrapper');
const gridWidth = grid.clientWidth;
const gridHeight = grid.clientHeight;

let selectedColor;
let dim;

function getRandomInt() {
    const randomInt = Math.floor(Math.random() * 255); 
    return randomInt;
}

function insertGridCell(dim) {
    for (let i = 0; i < dim**2; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.style.width = `${gridWidth / dim}px`;
        gridCell.style.height = `${gridHeight / dim}px`;
        grid.appendChild(gridCell);
    }
}

function setPressedButton(event) {
    event.currentTarget.classList.add('pressed');

    for (let button of buttons.children) {
        if (event.currentTarget !== button) {
            button.classList.remove('pressed');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    dim = 16;
    rangeSlider.previousElementSibling.textContent = `${dim} x ${dim}`;
    insertGridCell(dim);
})

rangeSlider.addEventListener('input', event => {
    dim = event.target.value;
    event.target.previousElementSibling.textContent = `${dim} x ${dim}`;

    while(grid.firstElementChild) {
        grid.removeChild(grid.firstElementChild);
    }

    insertGridCell(dim);
})

selector.addEventListener('input', event => {
    selectedColor = event.target.value;
    setPressedButton(event);
})

randomizer.addEventListener('click', event => {
    setPressedButton(event);
})

darkener.addEventListener('click', event => {
    setPressedButton(event);
})

eraser.addEventListener('click', event => {
    selectedColor = 'rgb(240, 239, 247)';
    setPressedButton(event);
})

sweeper.addEventListener('click', event => {
    for (let cell of grid.children) {
        cell.style.backgroundColor = 'rgb(240, 239, 247)';
    }
    setPressedButton(event);
})

grid.addEventListener('mouseover', event => {
    if (event.target !== event.currentTarget) {
        if (randomizer.className.includes('pressed')) {
            selectedColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
        } else if (selector.className.includes('pressed')) {
            console.log(selectedColor);
        }
        event.target.style.backgroundColor = selectedColor;
    }
})