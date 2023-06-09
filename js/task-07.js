const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl);
inputEl.addEventListener("input", () => {
  textEl.style.fontSize = `${inputEl.value}px`;
  console.log(inputEl.value);
});
