// Destaque dos botões
let titulo = document.querySelector(".titulo");
let botoes = document.querySelectorAll(".content-trilhas");

export function destacarBotao(botaoClicado) {
  botoes.forEach((botao) => {
    botao.querySelector(".iconBtn i").style.color = "rgb(131, 131, 131)";
    botao.querySelector(".titulo-trilha").style.color = "rgb(131, 131, 131)";
  });
  botaoClicado.querySelector(".iconBtn i").style.color = "rgb(5, 125, 255)";
  botaoClicado.querySelector(".titulo-trilha").style.color = "rgb(5, 125, 255)";
  titulo.innerHTML = botaoClicado.querySelector(".titulo-trilha").textContent; // Atualizar o título da página de acordo com o botão / menu clicado
}
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    destacarBotao(botao);
  });
});

destacarBotao(botoes[0]); // Fará que o primeiro botão - Geral - fique sempre destacado

// Funcionalidade dos botões
export const btnFrontEnd = document.getElementById("btnFrontEnd");
export const btnComunidade = document.getElementById("btnComunidade");
export const btnConvida = document.getElementById("btnConvida");
export const btnGeral = document.getElementById("btnGeral");
export const btnAgenda = document.getElementById("btnAgenda");

const cronogramaFrontEnd = document.getElementById("frontend");
const cronogramaComunidade = document.getElementById("comunidades");
const cronogramaConvida = document.getElementById("convida");
const cronogramaGeral = document.getElementById("horario");
const cronogramaAgenda = document.getElementById("agenda");

btnGeral.addEventListener("click", function () {
  cronogramaGeral.style.display = "flex";
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaAgenda.style.display = "none";
});

btnFrontEnd.addEventListener("click", function () {
  cronogramaFrontEnd.style.display = "flex";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaGeral.style.display = "none";
  cronogramaAgenda.style.display = "none";
});

btnComunidade.addEventListener("click", function () {
  cronogramaComunidade.style.display = "flex";
  cronogramaFrontEnd.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaGeral.style.display = "none";
  cronogramaAgenda.style.display = "none";
});

btnConvida.addEventListener("click", function () {
  cronogramaConvida.style.display = "flex";
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "none";
  cronogramaGeral.style.display = "none";
  cronogramaAgenda.style.display = "none";
});

btnAgenda.addEventListener("click", function () {
  cronogramaAgenda.style.display = "flex";
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaGeral.style.display = "none";
});

