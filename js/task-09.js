function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const changeColorElBtn = document.querySelector('.change-color');

changeColorElBtn.addEventListener('click', () =>{
  const hexColor = getRandomHexColor();

  document.body.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor;
  console.log(hexColor);

})