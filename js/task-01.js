const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent}`,
    `\nElements: ${element.lastElementChild.children.length}`
  )
);
