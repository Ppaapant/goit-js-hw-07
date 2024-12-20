function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createButtonEl = controlsEl.querySelector('[data-create]');
const destroyButtonEl = controlsEl.querySelector('[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', () => {
  const amount = parseInt(inputEl.value, 10);
  if (isNaN(amount) || amount < 1 || amount > 100) return;

  createBoxes(amount);
  inputEl.value = '';
});

destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
    size += 10;
  }

  boxesContainerEl.append(...boxes);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}

