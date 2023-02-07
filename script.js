const paleta = document.querySelectorAll('.color');

// 5 - req 1

function salvarNoLocal() {
  const listaCores = [];
  for (let i = 1; i < paleta.length; i += 1) {
    listaCores[i] = paleta[i].style.backgroundColor;
  }
  const stg = localStorage;
  stg.setItem('colorPalette', JSON.stringify(listaCores));
}

function restaurarNoLocal() {
  const restaurarCores = JSON.parse(localStorage.getItem('colorPalette')) || [];

  for (let i = 1; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = restaurarCores[i];
  }
}

// 4

function sortearCores() {
  const nAleatorio = () => Math.floor(Math.random() * 255);
  const gerarCores = () =>
    `rgb(${nAleatorio()},${nAleatorio()},${nAleatorio()})`;

  for (let i = 1; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = gerarCores();
  }
  salvarNoLocal();
}

const btnAleato = document.querySelector('#button-random-color');
btnAleato.addEventListener('click', sortearCores);

// 5 req 2

window.onload = () => restaurarNoLocal();
