const inputEl = document.querySelector("input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (e) => {
  const trimValue = e.target.value.trim();
  if (trimValue.length === Number(dataLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
