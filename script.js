const colorSelector = document.querySelector('.selector-wrapper');
const colorRandomizer = document.getElementById('randomizer');

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

colorSelector.addEventListener('input', event => {
    selectedColor = event.target.value;
    event.target.style.backgroundColor = selectedColor;
})

colorRandomizer.addEventListener('click', event => {
    event.target.classList.toggle('button-toggle');
    // selectedColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
})

grid.addEventListener('mouseover', event => {
    // selectedColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;

    if (event.target !== event.currentTarget) {
        event.target.style.backgroundColor = selectedColor;
    }
})