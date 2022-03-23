let colorSelected = "black"
let mode = ''
let defaultMode = "black"
let defaultSize = 24

window.onload = () => {
    makeGrid(defaultSize)
    mode = defaultMode
    startbutton = document.querySelector(".reg-button")
    startbutton.classList.add("chosen")
}


const regButtonManager = document.querySelector(".reg-button");
const rainbowButtonManager = document.querySelector(".rainbow-button");
const clearButtonManager = document.querySelector(".clear-button");
const gridButtonManager = document.querySelector(".grid-button");

regButtonManager.addEventListener("mouseover",lightup);
regButtonManager.addEventListener("mouseout",revert);
regButtonManager.addEventListener("click",clicked);
regButtonManager.addEventListener("click",() => mode = "black");

rainbowButtonManager.addEventListener("mouseover",lightup);
rainbowButtonManager.addEventListener("mouseout",revert);
rainbowButtonManager.addEventListener("click",clicked);
rainbowButtonManager.addEventListener("click",() => mode = "rainbow");

clearButtonManager.addEventListener("mouseover",lightup);
clearButtonManager.addEventListener("mouseout",revert);
clearButtonManager.addEventListener("click",erase);

gridButtonManager.addEventListener("mouseover",lightup);
gridButtonManager.addEventListener("mouseout",revert);
gridButtonManager.addEventListener("click",gridSelector);

function lightup(e){
    e.target.classList.add('moused-over')
}

function revert(e){
    e.target.classList.remove('moused-over')
}

function clicked(e){
    [regButtonManager,rainbowButtonManager,clearButtonManager,gridButtonManager].forEach(element => element.classList.remove("chosen"));
    e.target.classList.add("chosen");
}

function erase(){
    allGrid = document.querySelector("#grid-container").childNodes
    allGridArray = Array.from(allGrid).slice(1);
    allGridArray.forEach(child => child.style.backgroundColor = "white")
}

function gridSelector(){
    const userSize = window.prompt("Enter the desired grid size. Grid will be a square with entered length per side. Max size is 64.");
    makeGrid(userSize);
}

let mouseDown = false
document.body.onmousedown = mouseDownFunc
document.body.onmouseup = mouseUpFunc

function mouseDownFunc(){
    mouseDown = true;
};

function mouseUpFunc(){
    mouseDown = false;
};

function randomRGB() {
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    let randColor = "rgb(" + R + "," + G + "," + B + ")";
    return randColor
}

//mouseover event handling
const gridTarget = document.getElementById("grid-container");
gridTarget.addEventListener("mouseover",sketch)
gridTarget.addEventListener("click",sketchClick)

function sketch(e){ //when mouseover event fires, check if mousedown
    if(mouseDown === false){
        return
    }else if(mode === 'rainbow'){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    }else if(mode === 'black'){
        e.target.style.backgroundColor = `${colorSelected}`;
    }

};
function sketchClick(e){ //when mouseover event fires, check if mousedown
    if(mode === 'rainbow'){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    }else if(mode === 'black'){
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