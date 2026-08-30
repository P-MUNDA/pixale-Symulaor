
import { red, blue, green } from "./utils.js";

const canvas = document.querySelector('.pixa');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth
canvas.height = window.innerHeight


const width = canvas.width
const height = canvas.height

const gDWidth = width * 0.8
const gDHeight = height * 0.8

const marginX = width * 0.1
const marginY = height * 0.1

const numRows = 40
const numCols = 40


const numCells = numCols * numRows

const cellW = gDWidth / numCols
const cellH = gDHeight / numRows


function draw() {
    const width = canvas.width
    const height = canvas.height

    // Fill background
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

        for(let i=0;i<numCells;i++){
           const col= i%numCols;
           const row= Math.floor(i/numCols);

           const x= col*cellW;
           const y= row*cellH;
           const channelw= cellW/3;

            // Draw RED channel
            context.save()
           context.translate(x+marginX,y+marginY);
           const redColor = red(); 
           console.log('Applying red color:', redColor);
           context.fillStyle = redColor;
           context.fillRect(0,0, cellW*0.25,cellH);
           context.restore();

           // Draw BLUE channel
           context.save()
           context.translate(x+marginX+channelw,y+marginY);
           const blueColor = blue();
           console.log('Applying blue color:', blueColor);
           context.fillStyle = blueColor;
           context.fillRect(0,0, cellW*0.25,cellH);
           context.restore();

           // Draw GREEN channel
           context.save()
           context.translate(x+marginX+channelw*2,y+marginY);
           const greenColor = green();
           console.log('Applying green color:', greenColor);
           context.fillStyle = greenColor;
           context.fillRect(0,0, cellW*0.25,cellH);
           context.restore();


        }

}

 draw();

