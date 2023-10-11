import "./navigation-mobile.js";
import "./templateAoVivo.js";
import { cardsProcessadosConvida } from "./templateConvida.js";
import { cardsProcessadosComunidades } from "./templateComunidades.js";
import { cardsProcessadosFrontEnd } from "./templateFrontEnd.js";


// Função debounce para adicionar um atraso na execução de uma função após um evento
function debounce(func, delay) {
  let timer; // Variável para armazenar o identificador do temporizador

  return function () {
    clearTimeout(timer); // Limpa o temporizador se já estiver definido

    timer = setTimeout(() => {
      func.apply(this, arguments); // Executa a função original após o atraso
    }, delay);
  };
}

// Obtém a barra de pesquisa
const searchBar = document.getElementById("search-box-input");

function search() {

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
};

// Ouça o evento 'input' na barra de pesquisa
searchBar.addEventListener("input", debounce(search, 1000));

