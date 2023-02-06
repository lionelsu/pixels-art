const rdnBtnColor = document.querySelector('#button-random-color');
const colorsPalette = document.querySelectorAll('.color');

rdnBtnColor.addEventListener('click', () => {
  const randomNumber = () => Math.floor(Math.random() * 255);
  const randomRgb = () =>
    `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  for (let index = 1; index < 4; index += 1) {
    colorsPalette[index].style.backgroundColor = randomRgb();
  }
});
