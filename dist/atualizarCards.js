// Funcionalidade de atualizar os cards da página ao vivo.
function atualizarCardsAoVivo() {
  const now = moment();
  const currentTime = now.format("HH:mm");

  const cardsAoVivo = document.querySelectorAll(".cards-palestrante-content, .cards-topicos-content");

  cardsAoVivo.forEach((card) => {
    const start = card.getAttribute("data-start");
    const end = card.getAttribute("data-end");

    if (currentTime >= start && currentTime < end) {
      card.style.display = "flex"; // Exibe o Card
    } else {
      card.style.display = "none"; // Oculta o Card
    }
  });
}

// Retornando a função para atualizar os cards ao vivo e foi implementado um intervalo para atualização periódica dos cards de 1seg
atualizarCardsAoVivo();
setInterval(atualizarCardsAoVivo, 1000);

export { atualizarCardsAoVivo };
