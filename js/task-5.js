function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const currentColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const changeColorWidget = document.querySelector(".widget");

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  changeColorWidget.style.backgroundColor = newColor;
  currentColor.textContent = newColor;
});
