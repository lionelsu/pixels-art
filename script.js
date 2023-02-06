const rdnColor = document.querySelector('#button-random-color');
const colorsPalette = document.querySelectorAll('.color');

const getRandomColor = () => Math.floor(Math.random() * 255);

rdnColor.addEventListener('click', () => {
  colorsPalette[1].style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  colorsPalette[2].style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  colorsPalette[3].style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
});
