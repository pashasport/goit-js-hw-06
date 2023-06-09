function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const colorSpanEl = document.querySelector(".color");
// const changeButtonColorEl = document.querySelector(".change-color");
// const changeBodyColorEl = document.querySelector("body");
// changeButtonColorEl.addEventListener("click", () => {
//   colorSpanEl.textContent = getRandomHexColor();
//   changeBodyColorEl.style.backgroundColor = `${colorSpanEl.textContent}`;
// });
const buttonChangeColor = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const changeColor = (document.body.style.backgroundColor =
    getRandomHexColor());

  valueColor.textContent = changeColor;
  console.log(changeColor);
});
