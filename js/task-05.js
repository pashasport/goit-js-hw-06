const formInputEl = document.querySelector("#name-input");
const userNameOutEl = document.querySelector("#name-output");

formInputEl.addEventListener("input", (e) => {
  userNameOutEl.textContent = e.target.value;
  if (e.target.value === "") {
    userNameOutEl.textContent = "Anonymous";
  }
});
