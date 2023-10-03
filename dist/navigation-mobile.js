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

destacarBotao(botoes[0]); // Fará que o primeiro botão, do ao vivo fique sempre destacado

// Funcionalidade dos botões
export let btnFrontEnd = document.getElementById("btnFrontEnd");
export let btnComunidade = document.getElementById("btnComunidade");
export let btnConvida = document.getElementById("btnConvida");
export let btnLive = document.getElementById("btnAoVivo");

let cronogramaFrontEnd = document.getElementById("frontend");
let cronogramaComunidade = document.getElementById("comunidades");
let cronogramaConvida = document.getElementById("convida");
let cronogramaLive = document.getElementById("horario");

btnFrontEnd.addEventListener("click", function () {
  cronogramaFrontEnd.style.display = "flex";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaLive.style.display = "none";
});

btnComunidade.addEventListener("click", function () {
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "flex";
  cronogramaConvida.style.display = "none";
  cronogramaLive.style.display = "none";
});

btnConvida.addEventListener("click", function () {
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "flex";
  cronogramaLive.style.display = "none";
});

btnLive.addEventListener("click", function () {
  cronogramaFrontEnd.style.display = "none";
  cronogramaComunidade.style.display = "none";
  cronogramaConvida.style.display = "none";
  cronogramaLive.style.display = "flex";
});
