const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
});

