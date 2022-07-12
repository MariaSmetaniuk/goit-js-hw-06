function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const createBtn = controlsEl.querySelector('button[data-create]');
const destroyBtn = controlsEl.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener("click", quantityOfBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function quantityOfBoxes() {
  createBoxes(controlsEl.firstElementChild.value);
}

let divSideSize = 20;

function createBoxes(amount) {
  const boxesElements = [];
  
  for (let i = 0; i < amount; i += 1) {
    divSideSize += 10;

    const divEl = document.createElement('div');
    divEl.style.width = `${divSideSize}px`;
    divEl.style.height = `${divSideSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    boxesElements.push(divEl);
  }

  boxesContainer.append(...boxesElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  divSideSize = 20;
}
