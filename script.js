//Variable reference to "container" div
const container = document.querySelector('.container');

// Creates grid
for (let i = 0; i < 16; i++) {
  // Creates row
  const row = document.createElement("div");
  row.classList.add("row");

  // Populates row with grid squares
  for (let j = 0; j < 16; j++){
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  container.appendChild(row);
}

// Apply event listener to all squares
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
	square.addEventListener("mouseover", () => {
		console.log("#blessed!");
	});
});