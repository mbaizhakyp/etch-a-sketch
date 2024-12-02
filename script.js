const container = document.querySelector(".container");

function createGrids (dimension = 16) {
    for(let i = 0; i < dimension * dimension; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        grid.style.width = (container.getBoundingClientRect().width - 4) / dimension + "px";
        grid.style.height = (container.getBoundingClientRect().width - 4) / dimension + "px";
    }
}
createGrids();

container.addEventListener("mouseover", function(e) {
    const hoverGrid = e.target;
    if(hoverGrid.classList.contains("grid")) {
        hoverGrid.style.backgroundColor = ("black");
    }
})

const button = document.querySelector("button");

button.addEventListener("click", function() {
    const allGrids = document.querySelectorAll(".grid");
    allGrids.forEach(gridToRemove => {
        gridToRemove.remove();
    });
    let dimension = prompt("Enter the number of squares");
    console.log(dimension)
    dimension = checkRange(dimension);
    console.log(dimension);
    createGrids(dimension);
})

function checkRange(number) {
    let n = Number(number);
    n = Math.min(100, Math.max(0, n)); 
    return n;
}