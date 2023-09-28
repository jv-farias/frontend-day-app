// import { htmlGerado } from '../dist/cardsHtml.js';
// import { htmlGerado1 } from '../dist/cardsHtml.js';
// import { htmlGerado2 } from '../dist/cardsHtml.js';
// import { btnFrontEnd } from '../dist/botoesTrilhas.js';
// import { btnComunidade } from '../dist/botoesTrilhas.js';
// import { btnConvida } from '../dist/botoesTrilhas.js';
import { htmlGeradoAoVivo } from '../dist/cardsHtml.js';

document.addEventListener("DOMContentLoaded", function () {
    function atualizarCardsAoVivo() {
      const now = moment();
      const currentTime = now.format("HH:mm");
  
      const cardsAoVivo = document.querySelectorAll(".cards-palestrante-content, .cards-topicos-content");
      cardsAoVivo.forEach((card) => {
        const start = card.getAttribute("data-start");
        const end = card.getAttribute("data-end");
  
        if (currentTime >= start && currentTime < end) {
          card.style.display = "block"; // Exibe o card
        } else {
          card.style.display = "none"; // Oculta o card
        }
      });
    }
  
    atualizarCardsAoVivo(); // Chama a função para atualizar os cards ao carregar a página
  
    // Define um intervalo para verificar e atualizar os cards a cada minuto
    setInterval(atualizarCardsAoVivo, 1000); // Atualiza a cada minuto (60 segundos)
  });

  
