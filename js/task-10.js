function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountEl = document.querySelector("#controls input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  for (var i = 0; i < amount; i += 1) {
    var elem = document.createElement("div");

    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();

    boxesEl.append(elem);
  }
}

createEl.addEventListener("click", () => {
  var amount = amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
