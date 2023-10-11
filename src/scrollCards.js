export function atualizarCardsAoVivo() {
    const now = moment();
    const currentTime = now.format("HH:mm");
    const cardsAoVivo = document.querySelectorAll(".cards-palestrante-content, .cards-topicos-content");
  
    let scrollAplicado = false; // Variável para controlar se o scroll já foi aplicado
  
    cardsAoVivo.forEach((card) => {
      const start = card.getAttribute("data-start");
      const end = card.getAttribute("data-end");
  
      if (currentTime >= start && currentTime < end) {
        card.style.display = "flex"; // Exibe o Card
  
        if (!scrollAplicado) {
          // Rola a página apenas para o primeiro card ao vivo
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          scrollAplicado = true; // Define a variável como true para que o scroll não seja aplicado novamente
        }
      } else {
        card.style.display = "flex"; // Mantém todos os cards visíveis, até mesmo os que não estão acontecendo agora 
      }
    });
  }
  
  // Chama a função apenas quando a página é carregada ou recarregada
  window.addEventListener('load', atualizarCardsAoVivo);
  
  // Retornando a função para atualizar os cards ao vivo e foi implementado um intervalo para atualização periódica dos cards de 1seg
  setInterval(atualizarCardsAoVivo, 1000);
