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
    let markup = '';
    for (let i = 0; i < amount; i++) {
      markup += `
      <div class="box" style="background-color: ${getRandomHexColor()}; width: ${step}px; height: ${step}px;"></div>
    `;
      step += 10;
    }

    boxesWrapp.insertAdjacentHTML('beforeend', markup);
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
