import "./loading.js";


// inicio do main.js
// criando um apelido para a função querySelectorAll
const $ = (s) => document.querySelectorAll(s);

const [el] = $('#search-box-input');
const [ul] = $('.cards-container');
const radios = $('input[name="tab"]')
let cache = {placeholder: true, talks: {principal: [], invite:[], frontend:[], communities:[]}};

// inicia os dados
search();


// registra os eventos
el.addEventListener('input', debounce(async function (el) {
  const {value: query} = el.target;
  const [{value: tab}] = $('input[name="tab"]:checked');

  search(tab, query);
}));

Array.from(radios).forEach((radio) => {
  radio.addEventListener('change', function () {
    search(this.value, '');
  })
})
// fim do main.js





// funcoes auxiliares

function handleToggleSave(e){
  if(e.checked) {
    addSavedIdTalk(+e.dataset.id);    
  } else{
    removeSavedIdTalk(+e.dataset.id);    
  }
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

searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});

// Adicione um ouvinte de eventos para delegar cliques nos ícones "salvar-agenda"
document.addEventListener("click", salvarCard);

// Chame a função para criar elementos com os dados salvos quando a página carregar
window.addEventListener("load", criarElementosComDadosSalvos);
