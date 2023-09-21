export const btnFrontEnd = document.getElementById("trocar-frontend");
export const btnComunidade = document.getElementById("trocar-comunidade");
export const btnConvida = document.getElementById("trocar-convida");

const cronogramaFrontEnd = document.getElementById("cronograma-frontend");
const cronogramaComunidade = document.getElementById("cronograma-comunidade");
const cronogramaConvida = document.getElementById("cronograma-convida");




btnFrontEnd.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "block";
    cronogramaComunidade.style.display = "none";
    cronogramaConvida.style.display = "none";
});

btnComunidade.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "none";
    cronogramaComunidade.style.display = "block";
    cronogramaConvida.style.display = "none";
});

btnConvida.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "none";
    cronogramaComunidade.style.display = "none";
    cronogramaConvida.style.display = "block";
});

