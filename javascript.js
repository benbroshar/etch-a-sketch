let colorSelected = "black"

window.onload = () => {
    makeGrid(24)
}

let mouseDown = false
document.body.onmousedown = mouseDownFunc
document.body.onmouseup = mouseUpFunc

function mouseDownFunc(){
    mouseDown = true;
    console.log(mouseDown)
};

function mouseUpFunc(){
    mouseDown = false;
    console.log(mouseDown)
};

//mouseover event handling
const gridTarget = document.getElementById("grid-container");
gridTarget.addEventListener("mouseover",sketch)

function sketch(e){ //when mouseover event fires, check if mousedown
    if(mouseDown === false){
        return
    }else if(colorSelected === 'rainbow'){

    }else if(colorSelected === 'black'){
        e.target.style.backgroundColor = `${colorSelected}`;
    }
   

};

function makeGrid(size){
    if(size > 64){
        alert("Grid can be at maximum 64x64")
        return
    }
    //resetting the grid so it can be remade
    gridTarget.replaceChildren(''); 

    for(let i = 0;i < size*size;i++){ //iterates for each grid square
            const grid = document.createElement('div');
            grid.classList.add(`grid${i}`) //gives each grid element a unique classname
            grid.style.backgroundColor = "white";
            let gridHeight = 500/size;
            let gridWidth = gridHeight;
            grid.style.width = `${gridWidth}px`;
            grid.style.height = `${gridHeight}px`;
            gridTarget.appendChild(grid)
    }
};