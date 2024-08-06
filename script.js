//CREATES INITIAL GRID
function createGrid(numOfSquares) {

  const width = 960;
  for (let i = 0; i < numOfSquares; i++) {
    // Creates row
    const row = document.createElement("div");
    row.classList.add("row");

    // Populates row with grid squares
    for (let j = 0; j < numOfSquares; j++){
      const square = document.createElement("div");
      square.classList.add("square");
      square.style["min-width"] = `${width / numOfSquares}px`; 
      square.style["min-height"] = `${width / numOfSquares}px`; 
      row.appendChild(square);
    }
    container.appendChild(row);
  } 
}

//CHANGES COLOR OF SQUARE
function changeSquareColor(e) {

  currentColor = e.target.style.backgroundColor;
  if (currentColor != 'blue') {
    e.target.style.backgroundColor = 'blue';
  }
  else {
    e.target.style.backgroundColor = 'peachpuff';
  }
  
}

//APPLIES EVENT LISTENER (for color change) TO ALL SQUARES
function applyChangeSquareColor() {
  squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener("mouseover", changeSquareColor);
  })
}

//GLOBAL VARIABLES SET-UP
//Variable references to elements that will not be removed
const container = document.querySelector('.container');
const button = document.createElement("button");

// Adds button to the page
button.textContent = "Click Me!";
container.appendChild(button);
// Attach event listener to button
button.addEventListener("click", () => {
  numOfSquares = parseInt(prompt("Please enter the number of squares per side for the new grid."));
  container.replaceChildren(container.firstElementChild);
  createGrid(numOfSquares);
  applyChangeSquareColor();
})

createGrid(25);
applyChangeSquareColor();