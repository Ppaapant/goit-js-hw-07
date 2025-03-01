function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorSpanEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');

changeColorButtonEl.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
});

