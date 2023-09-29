export const btnFrontEnd = document.getElementById("btnFrontEnd");
export const btnComunidade = document.getElementById("btnComunidade");
export const btnConvida = document.getElementById("btnConvida");
export const btnLive = document.getElementById("btnAoVivo");

const cronogramaFrontEnd = document.getElementById("frontend");
const cronogramaComunidade = document.getElementById("comunidades");
const cronogramaConvida = document.getElementById("convida");
const cronogramaLive = document.getElementById("horario");

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
