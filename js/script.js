// Ativar Links do Menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens div img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 600px)').matches;
  const srcImg = img.getAttribute("src");
  if(media) {
    galeriaContainer.setAttribute("src", srcImg);
  }

}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


const conteudo = document.querySelector(".conteudo-news");
const icone = document.querySelector(".icone-display-news");
const background = document.querySelector(".background-news");
const bgFlex = document.querySelector(".conteudo-geral");
const fecharBackground = document.querySelector(".background-news");



function abrir() {
  conteudo.classList.add("mostrar");
  background.classList.add("mostrar");
}
bgFlex.addEventListener("click", abrir);


function fechar() {
  conteudo.classList.remove("mostrar");
  background.classList.remove("mostrar");
}


icone.addEventListener('click', fechar);
fecharBackground.addEventListener('click', fechar);


