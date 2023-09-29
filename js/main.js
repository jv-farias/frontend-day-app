// import { htmlGerado } from '../dist/cardsHtml.js';
// import { htmlGerado1 } from '../dist/cardsHtml.js';
// import { htmlGerado2 } from '../dist/cardsHtml.js';
// import { btnFrontEnd } from '../dist/botoesTrilhas.js';
// import { btnComunidade } from '../dist/botoesTrilhas.js';
import { btnConvida } from "../dist/botoesTrilhas.js";
import { htmlGeradoAoVivo } from "../dist/cardsHtml.js";

document.addEventListener("DOMContentLoaded", function () {
  function atualizarCardsAoVivo() {
    const now = moment();
    const currentTime = now.format("HH:mm");

    const cardsAoVivo = document.querySelectorAll(
      ".cards-palestrante-content, .cards-topicos-content"
    );
    cardsAoVivo.forEach((card) => {
      const start = card.getAttribute("data-start");
      const end = card.getAttribute("data-end");

      if (currentTime >= start && currentTime < end) {
        card.style.display = "flex"; // Exibe o card
      } else {
        card.style.display = "none"; // Oculta o card
      }
    });
  }
  atualizarCardsAoVivo();
  setInterval(atualizarCardsAoVivo, 1000);
});

let titulo = document.querySelector(".titulo");
let botoes = document.querySelectorAll(".content-trilhas");

function destacarBotao(botaoClicado) {
  // Resetar a cor de todos os botões
  botoes.forEach((botao) => {
    botao.querySelector(".iconBtn i").style.color = "rgb(131, 131, 131)";
    botao.querySelector(".titulo-trilha").style.color = "rgb(131, 131, 131)";
  });

  // Destacar o botão clicado
  botaoClicado.querySelector(".iconBtn i").style.color = "rgb(5, 125, 255)";
  botaoClicado.querySelector(".titulo-trilha").style.color = "rgb(5, 125, 255)";

  // Atualizar o título com base no botão clicado
  titulo.innerHTML = botaoClicado.querySelector(".titulo-trilha").textContent;
}

// Adicionar um manipulador de eventos de clique a cada botão
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    destacarBotao(botao);
  });
});

// Inicialmente, destaque o primeiro botão
destacarBotao(botoes[0]);
