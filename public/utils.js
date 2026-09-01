


export function red() {
    // const red = Math.floor(Math.random()*256);
    // const green = Math.floor(Math.random()*256);
    // const blue = Math.floor(Math.random()*256);
    const red= 256;
    const green= 0;
    const blue= 0;
    return `rgb(${red},${0},${0})`
}

export function green() {
    // const red = Math.floor(Math.random()*256);
    // const green = Math.floor(Math.random()*256);
    // const blue = Math.floor(Math.random()*256);
    const red= 0;
    const green= 256;
    const blue= 0;
    return `rgb(${0},${green},${0})`
}

export function blue() {
    // const red = Math.floor(Math.random()*256);
    // const green = Math.floor(Math.random()*256);
    // const blue = Math.floor(Math.random()*256);
    const red= 0;
    const green= 0;
    const blue= 256;

    return `rgb(${0},${0},${blue})`
}

console.log(typeof(red())) // 


 export function col(){
    const columnRange= document.querySelector('.colNum');
    return columnRange.value;
 }

 export function row(){
    const rowRange=document.querySelector('.rowNum');
    return rowRange.value;
 }
