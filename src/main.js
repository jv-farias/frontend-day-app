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

  // Obtém todos os elementos com classe "cards-cronograma-content" (cards de palestrantes)
  const cardsPalestrantesGeral = document.querySelectorAll(".cards-palestrante-content");

  // Itera sobre todos os elementos de cards de palestrantes
  cardsPalestrantesGeral.forEach((element) => {
    const nomeElement = element.querySelector(".nomePalestrante");
    const assuntoElement = element.querySelector(".assunto-palestra");

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

  // Obtém todos os elementos com classe "cards-cronograma-content" (cards de palestrantes)
  const cardsTopicosGeral = document.querySelectorAll(".cards-topicos-content");

  // Itera sobre todos os elementos de tópicos
  cardsTopicosGeral.forEach((element) => {
    // Verifica se o elemento contém informações relevantes para a pesquisa
    const nomeElement = element.querySelector(".conteudo-topico");

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

// Função para lidar com o clique no ícone "salvar-agenda"
function salvarCard(event) {
  // Verifique se o elemento clicado tem a classe "salvar-agenda"
  if (event.target.classList.contains("salvar-agenda")) {
    // Encontre o elemento pai do ícone que é o card
    const cardElement = event.target.closest(".cards-palestrante-content");

    const nomePalestranteElement = cardElement.querySelector(".nomePalestrante");
    const cargoPalestranteElement = cardElement.querySelector(".cargoPalestrante");
    const trilhaPalestranteElement = cardElement.querySelector(".trilhaPalestrante");
    const assuntoPalestranteElement = cardElement.querySelector(".assuntoLive");
    const nomeArquivoImagemElement = cardElement.querySelector(".imag-palestrante");
    const HorarioPalestranteElement = cardElement.querySelector(".horarioLive");

    

    const nomePalestrante = nomePalestranteElement.textContent;
    const cargoPalestrante = cargoPalestranteElement.textContent;
    const trilhaPalestrante = trilhaPalestranteElement.textContent;
    const assuntoPalestrante = assuntoPalestranteElement.textContent;
    const HorarioPalestrante = HorarioPalestranteElement.textContent;
    const nomeArquivoImagem = nomeArquivoImagemElement.contains;

    // Obtenha outras informações relevantes do card
    const cardData = {
      dataStart: cardElement.getAttribute("data-start"),
      dataEnd: cardElement.getAttribute("data-end"),
      nomePalestrante: nomePalestrante,
      cargoPalestrante: cargoPalestrante,
      trilhaPalestrante: trilhaPalestrante,
      assuntoPalestrante: assuntoPalestrante,
      HorarioPalestrante: HorarioPalestrante,
      nomeArquivoImagem: nomeArquivoImagem
    };

    // Recupere ou crie o array de cards salvos no localStorage
    let savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];


    // Verifique se o card já foi salvo (pode ser identificado pelo data-id)

    if (savedCards) {
      // Se o card ainda não estiver na lista, adicione-o
      savedCards.push({ ...cardData });

      // Atualize o localStorage com os cards salvos
      localStorage.setItem("savedCards", JSON.stringify(savedCards));

      // Opcional: Exiba uma mensagem de confirmação ou atualize a interface do usuário
      alert("Card salvo com sucesso!");
    } else {
      // Opcional: Trate o caso em que o card já foi salvo anteriormente
      alert("Este card já foi salvo.");
    }
  }
}

// Adicione um ouvinte de eventos para delegar cliques nos ícones "salvar-agenda"
document.addEventListener("click", salvarCard);

// Função para criar elementos HTML com base nos dados salvos no localStorage
function criarElementosComDadosSalvos() {
  // Recupere os dados do localStorage
  const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

  // Seção onde você deseja exibir os cards
  const cardsCronogramaAgenda = document.getElementById("cards-cronograma-agenda");

  // Limpe o conteúdo existente na seção
  cardsCronogramaAgenda.innerHTML = "";

  // Itere sobre os dados salvos e crie elementos HTML para cada um
  savedCards.forEach((cardData) => {
    const cardElement = document.createElement("li");
    cardElement.innerHTML = `
    <li data-start="${cardData.dataStart}" data-end="${cardData.dataEnd}" class="cards-palestrante-content">
    <div class="info-post">
        <div class="user">
            <div class="user-img">
                <img src="./assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
            </div>
            <div class="user-nome">
                <p class="usuario">@frontendday2023</p>
                <p class="horarioLive">${cardData.HorarioPalestrante}</p>
            </div>
        </div>
        <button class="salvar-agenda">
        <i class="fa-regular fa-bookmark" class="salvar-agenda"></i>
        </button>
    </div>
    <div class="palestrante">
        <div class="img-palestrante">
            <img src="${cardData.nomeArquivoImagem}" alt="${cardData.nomePalestrante}">
        </div>
        <div class="info-palestrante">
            <div class="nome-cargo">
                <p class="nomePalestrante">${cardData.nomePalestrante}</p>
                <p class="cargoPalestrante">${cardData.cargoPalestrante}</p>
            </div>
            <div class="trilha">
                <p class="trilhaPalestrante">${cardData.trilhaPalestrante}</p>
            </div>
        </div>
    </div>
    <div class="assunto-palestra">
        <p class="assuntoLive">${cardData.assuntoPalestrante}</p>
    </div>
</li>
    `;

    // Adicione o card à seção "cards-cronograma-agenda"
    cardsCronogramaAgenda.appendChild(cardElement);
  });
}

// Chame a função para criar elementos com os dados salvos quando a página carregar
window.addEventListener("click", criarElementosComDadosSalvos);
