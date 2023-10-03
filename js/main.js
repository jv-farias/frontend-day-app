import "../dist/navigation-mobile.js";
import "../dist/templateAoVivo.js";
import { atualizarCardsAoVivo } from "../dist/atualizarCards.js";
import { cardsProcessadosConvida } from "../dist/templateConvida.js";
import { cardsProcessadosComunidades } from "../dist/templateComunidades.js";
import { cardsProcessadosFrontEnd } from "../dist/templateFrontEnd.js";


// Obtém a barra de pesquisa
const searchBar = document.getElementById("search-box-input");

// Ouça o evento 'input' na barra de pesquisa
searchBar.addEventListener("input", function () {
  const searchTerm = searchBar.value.toLowerCase();

  // Obtém todos os elementos com classe "cards-cronograma-content" (cards de palestrantes)
  const cardsPalestrantes = document.querySelectorAll(".cards-cronograma-content");

  // Itera sobre todos os elementos de cards de palestrantes
  cardsPalestrantes.forEach((element) => {
    const nomeElement = element.querySelector(".nome");
    const assuntoElement = element.querySelector(".assunto");

    if (nomeElement && assuntoElement) {
      const nome = nomeElement.textContent.toLowerCase();
      const assunto = assuntoElement.textContent.toLowerCase();

      // Verifica se o elemento corresponde à pesquisa
      if (nome.includes(searchTerm) || assunto.includes(searchTerm) || searchTerm === "") {
        // Se corresponder (ou se a pesquisa estiver vazia), exibe o elemento
        element.style.display = "flex";
      } else {
        // Caso contrário, oculta o elemento
        element.style.display = "none";
      }
    }
  });

  // Obtém todos os elementos com classe "topicos-cronograma-content" (tópicos)
  const topicos = document.querySelectorAll(".topicos-cronograma-content");

  // Itera sobre todos os elementos de tópicos
  topicos.forEach((element) => {
    // Verifica se o elemento contém informações relevantes para a pesquisa
    const nomeElement = element.querySelector(".nome-topico");

    if (nomeElement) {
      const nome = nomeElement.textContent.toLowerCase();

      // Verifica se o elemento corresponde à pesquisa
      if (nome.includes(searchTerm) || searchTerm === "") {
        // Se corresponder (ou se a pesquisa estiver vazia), exibe o elemento
        element.style.display = "flex";
      } else {
        // Caso contrário, oculta o elemento
        element.style.display = "none";
      }
    }
  });
});
