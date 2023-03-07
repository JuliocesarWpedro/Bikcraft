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
  const media = matchMedia("(min-width: 600px)").matches;
  const srcImg = img.getAttribute("src");
  if (media) {
    galeriaContainer.setAttribute("src", srcImg);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

const modal = document.querySelector(".conteudo-news");
const iconeFechar = document.querySelector(".icone-display-news");
const backgroundModal = document.querySelector(".background-news");
const conteudoGeral = document.querySelector(".conteudo-geral");
const buttonEnviar = document.querySelector(".botao-news");
const body = document.querySelector("body");

if (localStorage.getItem("openModalNews") === null) {
  backgroundModal.style.display = "flex";
  modal.style.display = "flex";
}

function removerModal() {
  backgroundModal.style.display = "none";
  modal.style.display = "none";
  localStorage.setItem("openModalNews", "open");
}

iconeFechar.addEventListener("click", removerModal);
