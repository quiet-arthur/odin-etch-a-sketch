const container = document.querySelector(".container");

let gridSize = 16;

function drawGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("pixel-div");
    gridDiv.setAttribute(
      "style",
      `width: ${556 / gridSize}px; height: ${556 / gridSize}px`
    );
    container.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.add("red-div");
    });
  }
}

drawGrid();

const topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", () => {
  gridSize = prompt("Select a grid size: ");
  if (gridSize != null && gridSize != '') {
    removePreviousGrid();
    drawGrid();
  }
});

function removePreviousGrid() {
  container.innerHTML = "";
}
