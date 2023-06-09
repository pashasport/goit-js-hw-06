const counterValueEl = document.querySelector("#value");
const decrementValueEl = document.querySelector('[data-action="decrement"]');
const incrementValueEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// console.log(counterValueEl);

incrementValueEl.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
decrementValueEl.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
// console.log(decrementValueEl);
