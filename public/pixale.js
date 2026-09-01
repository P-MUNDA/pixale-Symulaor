import {row, col} from './utils.js';
const canvas = document.querySelector('.pixa');
const context = canvas.getContext('2d');


const columnRange = document.querySelector('.colNum');
const rowRange = document.querySelector('.rowNum');

const colorState = {
  red: true,
  green: true,
  blue: true,
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

const gDWidth = width * 0.8;
const gDHeight = height * 0.8;

const marginX = width * 0.1;
const marginY = height * 0.1;

const colorMap = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 255, 0)',
  blue: 'rgb(0, 0, 255)',
};

function updateButtonText(button, isOn) {
  const colorName = button.dataset.color;
  button.textContent = `${colorName.charAt(0).toUpperCase() + colorName.slice(1)} ${isOn ? 'ON' : 'OFF'}`;
  button.classList.toggle('off', !isOn);
}

document.querySelectorAll('.color-btn').forEach((button) => {
  const colorName = button.dataset.color;

  button.addEventListener('click', () => {
    colorState[colorName] = !colorState[colorName];
    updateButtonText(button, colorState[colorName]);
    draw();
  });

  updateButtonText(button, colorState[colorName]);
});

function draw() {
  const numRows = Number(rowRange.value);
  const numCols = Number(columnRange.value);
  const numCells = numCols * numRows;
  const cellW = gDWidth / numCols;
  const cellH = gDHeight / numRows;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numCells; i++) {
    const colIndex = i % numCols;
    const rowIndex = Math.floor(i / numCols);

    const x = colIndex * cellW + marginX;
    const y = rowIndex * cellH + marginY;
    const channelW = cellW / 3;

    if (colorState.red) {
      context.fillStyle = colorMap.red;
      context.fillRect(x, y, cellW * 0.25, cellH);
    }

    if (colorState.green) {
      context.fillStyle = colorMap.green;
      context.fillRect(x + channelW, y, cellW * 0.25, cellH);
    }

    if (colorState.blue) {
      context.fillStyle = colorMap.blue;
      context.fillRect(x + channelW * 2, y, cellW * 0.25, cellH);
    }
  }
}

draw();
columnRange.addEventListener('input', draw);
rowRange.addEventListener('input', draw);

 