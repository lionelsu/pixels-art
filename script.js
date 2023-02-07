const paleta = document.querySelectorAll('.color');

// 8 - Defina a cor preta como cor inicial da paleta de cores
function deixaOhPretoPadrao() {
  const preto = 'black';
  if (paleta[0].style.backgroundColor !== preto) {
    paleta[0].style.backgroundColor = preto;
    // 8 - req 2 fixar cor selected
    paleta[0].classList.add('selected');
  }
}

// 5 - req1: A paleta gerada deve ser salva no localStorage com a chave colorPalette
function salvarNoLocal() {
  // 5 - req1...
  const listaCores = [];
  for (let i = 0; i < paleta.length; i += 1) {
    listaCores[i] = paleta[i].style.backgroundColor;
  }

  const stg = localStorage;
  stg.setItem('colorPalette', JSON.stringify(listaCores));
}

function restaurarNoLocal() {
  const restaurarCores = JSON.parse(localStorage.getItem('colorPalette')) || [];

  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = restaurarCores[i];
  }
}

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.
function sortearCores() {
  const nAleatorio = () => Math.floor(Math.random() * 255);
  const gerarCores = () =>
    `rgb(${nAleatorio()},${nAleatorio()},${nAleatorio()})`;

  // 8 - Chamada para definir cor preta e class selected
  deixaOhPretoPadrao();
  for (let i = 1; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = gerarCores();
  }

  // 5 - req1: chamada para salvar
  salvarNoLocal();
}

const btnAleato = document.querySelector('#button-random-color');
btnAleato.addEventListener('click', sortearCores);

// 5 req2: A paleta gerada deve ser mantida ao recarregar a página.
window.onload = () => {
  deixaOhPretoPadrao();
  restaurarNoLocal();
};

// 9 - Crie uma função para selecionar uma cor na paleta de cores.
function seletorDeCores(event) {
  paleta.forEach((cor) => {
    cor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

paleta.forEach((cor) => {
  cor.addEventListener('click', seletorDeCores);
});
