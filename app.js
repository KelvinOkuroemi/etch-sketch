const board = document.querySelector(".container");

// Function to create board
function createBoard(size) {
  let square = board.querySelectorAll("div");
  square.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  // Set dynamic sizes
  let boardSize = size * size;
  for (let i = 0; i < boardSize; i++) {
    let squares = document.createElement("div");
    squares.addEventListener("mouseover", colorSquare);
    squares.style.backgroundColor = "white";
    board.appendChild(squares);
  }
}

// Default size
createBoard(16);

function changeSize(input) {
  // Validating input
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    let update = document.querySelector(".update");
    update.textContent = "Please choose an input between 2 and 100";
    setTimeout(() => {
      update.textContent = "";
    }, 3000);
  }
}

function colorSquare(color) {
  this.style.backgroundColor = "black";
  this.classList.add("marked");
}

// Event listeners

// eraser function *****
// set button click to store a value of true or false
// e.g button.onclick => drawID to true
// button.onclick => draw ID to false
// when you mouse over, draw
// add class name to the div that is drawn over
// Toggle eraser button
// when toggled generate event object
// if event object class list contains class remove class list indicator
// set background color to default
