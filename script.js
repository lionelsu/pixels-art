const paleta = document.querySelectorAll('.color');
const telaDePixels = document.querySelectorAll('.pixel');

// 8 e 10 - Defina a cor preta e as demais cores como cor inicial da paleta de cores
function coresPrincipais() {
  const cores = ['black', 'red', 'green', 'blue'];

  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = cores[i];
  }
}

// 5 - req1: A paleta gerada deve ser salva no localStorage com a chave colorPalette
function salvarPaletaLocal() {
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

  for (let i = 1; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = gerarCores();
  }

  // 5 - req1: chamada para salvar
  salvarPaletaLocal();
}

const btnAleato = document.querySelector('#button-random-color');
btnAleato.addEventListener('click', sortearCores);

// 9 - Crie uma função para selecionar uma cor na paleta de cores.
function seletorDeCores(event) {
  paleta.forEach((cor) => {
    cor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

// 9 - da para iterar sob outros laços, usando este pela legibilidade
paleta.forEach((cor) => {
  cor.addEventListener('click', seletorDeCores);
});

// 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage

function salvarTelaLocal() {
  const listaCores = [];
  for (let i = 0; i < telaDePixels.length; i += 1) {
    listaCores[i] = telaDePixels[i].style.backgroundColor;
  }

  const stg = localStorage;
  stg.setItem('pixelBoard', JSON.stringify(listaCores));
}

function restaurarTelaLocal() {
  const restaurarCores = JSON.parse(localStorage.getItem('pixelBoard')) || [];

  for (let i = 0; i < telaDePixels.length; i += 1) {
    telaDePixels[i].style.backgroundColor = restaurarCores[i];
  }
}

// 10 - Função que permite selecionar cores da paleta e pintar o quadro.

function pintarNoQuadro(event) {
  const corSelecionada = document.querySelector('.selected');
  const click = event.target.style;
  if (corSelecionada) {
    click.backgroundColor = corSelecionada.style.backgroundColor;
    salvarTelaLocal();
  }
}
telaDePixels.forEach((cor) => {
  cor.addEventListener('click', pintarNoQuadro);
});

// 11 - Crie um botão que retorne a cor do quadro para a cor inicial.

const botaoDeLimpeza = document.querySelector('#clear-board');
function limparTela() {
  telaDePixels.forEach((cor) => {
    const cores = cor;
    cores.style.backgroundColor = 'white';
  });
  localStorage.removeItem('pixelBoard');
}
botaoDeLimpeza.addEventListener('click', limparTela);

// 5 req2: A paleta gerada deve ser mantida ao recarregar a página.
window.onload = () => {
  coresPrincipais();
  restaurarNoLocal();
  restaurarTelaLocal();
};
