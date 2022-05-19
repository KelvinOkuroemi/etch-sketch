const board = document.querySelector(".container");
let clickID = true;

// Default color
let color = "black";

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

// Draw color
function colorSquare() {
  if (clickID) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}

// allow shapes to be drawn only when there is a click

document.querySelector("body").addEventListener("click",()=>{
  clickID = !clickID
})