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
