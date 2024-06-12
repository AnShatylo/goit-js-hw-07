function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxesWrapp = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesWrapp.innerHTML = "";

  let step = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${step}px`;
    box.style.height = `${step}px`;
    boxesWrapp.appendChild(box);
    step += 10;
  }

  document.querySelector("#controls input").value = "";
}

createBtn.addEventListener("click", () => {
  const amoutOfBoxes = parseInt(
    document.querySelector("#controls input").value
  );
  if (amoutOfBoxes >= 1 && amoutOfBoxes <= 100) {
    createBoxes(amoutOfBoxes);
  } 
});

destroyBtn.addEventListener("click", () => {
  boxesWrapp.innerHTML = "";
});
