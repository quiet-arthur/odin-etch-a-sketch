const container = document.querySelector(".container");
const colorChanger = document.getElementById("color-changer");
const spanPixel = document.getElementById("on-pixel");
const eraseBtn = document.querySelector(".erase");
const clearBtn = document.querySelector(".clear");
const rainbowBtn = document.querySelector(".rainbow");

const gridChanger = document.getElementById("grid-changer");
gridChanger.addEventListener("change", drawGrid);


function drawGrid() {
  removePreviousGrid();
  for (let i = 0; i < gridChanger.value * gridChanger.value; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute(
      "style",
      `width: ${500 / gridChanger.value}px; height: ${
        500 / gridChanger.value
      }px`
    );
    container.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", (event) => {
      if (event.altKey && rainbowMode) {
        let hslColor = getHslColor();
        gridDiv.style.backgroundColor = hslColor;
      }else if (event.altKey) {
        gridDiv.style.backgroundColor = colorChanger.value;
      }
    });
  }
  spanPixel.textContent = `${gridChanger.value} x ${gridChanger.value} `;
}
drawGrid();

let previousColor;

function erasePixel(e) {
  e.target.classList.toggle('enable');
  if (colorChanger.value != "#f0f8ff") {
    previousColor = colorChanger.value;
    colorChanger.value = "#f0f8ff"
  } else {
    colorChanger.value = previousColor;
  }
}

function removePreviousGrid() {
  container.innerHTML = "";
}

function clearGrid() {
  container.innerHTML = "";
  drawGrid();
}

function getHslColor() {
  let hueColor = Math.floor(Math.random() * 357);
  return `hsl(${hueColor}, 100%, 50%)`;
}

eraseBtn.addEventListener("click", erasePixel);
clearBtn.addEventListener("click", clearGrid);


let rainbowMode;

rainbowBtn.addEventListener("click", (e) => {
    rainbowMode = e.target.classList.toggle('enable');
})


const gameMessage = document.getElementById('game-message')


window.addEventListener('keydown', (e) => {
  if (e.altKey) {
    gameMessage.classList.add('visible');
  }
})