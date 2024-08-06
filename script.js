//SET-UP
//Variable references to elements that will not be removed
const container = document.querySelector('.container');
const button = document.createElement("button");
const width = 960;

// Adds button to the page
button.textContent = "Click Me!";
container.appendChild(button);

//CREATE INITIAL GRID
for (let i = 0; i < 16; i++) {
  // Creates row
  const row = document.createElement("div");
  row.classList.add("row");

  // Populates row with grid squares
  for (let j = 0; j < 16; j++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["min-width"] = `${width / 16}px`; 
    square.style["min-height"] = `${width / 16}px`; 
    row.appendChild(square);
  }
  container.appendChild(row);
}

// ATTACH EVENT LISTENER
// Applies event listener to all squares
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
	square.addEventListener("mouseover", (e) => {
    currentColor = e.target.style.backgroundColor;

    if (currentColor == "blue") {
      e.target.style.backgroundColor = 'peachpuff'
    }
    else {
      e.target.style.backgroundColor = 'blue'
    }
	});
});

let num_of_squares;

// REPLACE GRID 
button.addEventListener("click", () => {
  num_of_squares = parseInt(prompt("Please enter the number of squares per side for the new grid."));
  container.replaceChildren(container.firstElementChild);

  // Creates grid
  for (let i = 0; i < num_of_squares; i++) {
  // Creates row
  const row = document.createElement("div");
  row.classList.add("row");

    // Populates row with grid squares
    for (let j = 0; j < num_of_squares; j++){
      const square = document.createElement("div");
      square.classList.add("square");
      square.style["min-width"] = `${width / num_of_squares}px`; 
      square.style["min-height"] = `${width / num_of_squares}px`; 
      row.appendChild(square);
    }
  container.appendChild(row);
 }

 squares = document.querySelectorAll('.square');
 squares.forEach((square) => {
	square.addEventListener("mouseover", (e) => {
    currentColor = e.target.style.backgroundColor;

    if (currentColor == "blue") {
      e.target.style.backgroundColor = 'peachpuff'
    }
    else {
      e.target.style.backgroundColor = 'blue'
    }
	});
});

});

