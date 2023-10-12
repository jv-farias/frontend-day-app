import { getSavedTalkIds, setSavedTalkIds, hasSaved } from "./LocalStorage";
import "./loading.js";
import { renderTopic, renderTalk } from "./Components.js";

// inicio do main.js
// criando um apelido para a função querySelectorAll
const $ = (s) => document.querySelectorAll(s);

const [el] = $('#search-box-input');
const [ul] = $('.cards-container');
const tabs = $('input[name="tab"]')
let cache = { placeholder: true, talks: { principal: [], invite: [], frontend: [], communities: [] } };

// inicia os dados
search();

// registra os eventos
el.addEventListener('input', debounce(async function (el) {
  const { value: query } = el.target;
  const [{ value: tab }] = $('input[name="tab"]:checked');

  search(tab, query);
}));

el.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      search();
  }
});

Array.from(tabs).forEach((radio) => {
  radio.addEventListener('change', function () {
    search(this.value, el.value);
  })
})

window.handleToggleSave = handleToggleSave;



function handleToggleSave(e) {
  const talkId = +e.dataset.id;
  const savedIds = getSavedTalkIds();

  if (e.checked) {
    // Adicione o ID à lista de IDs salvos
    savedIds.push(talkId);
  } else {
    // Remova o ID da lista de IDs salvos
    const index = savedIds.indexOf(talkId);
    if (index > -1) {
      savedIds.splice(index, 1);
    }
  }

  // Atualize o `localStorage` com os IDs salvos atualizados
  setSavedTalkIds(savedIds);

  // Verifique a guia atual e atualize a exibição apenas na guia "saved"
  const activeTab = document.querySelector('input[name="tab"]:checked').value;
  if (activeTab === 'saved') {
    search('saved', el.value);
  }
}
// fim do main.js
// fim dos registros  eventos

// funcoes auxiliares
async function search(type = 'all', text = '') {
  // perguntar ao dados
  const data = await repositorioTalks(type);
  const all = type === 'saved' ? data : withTopics(data);
  const list = text ? all.filter((talk) => talkHasText(talk, text)) : all;


  const sorted = list.sort((a, b) => a.hour.localeCompare(b.hour));
  const itens = sorted.map((item) =>
    item.type === 'topic' ? renderTopic(item) : renderTalk(item)
  );

  //sempre remove e atualiza a lista; 
  ul.innerHTML = itens.join('');
}

function talkHasText(talk, text) {
  const content = JSON.stringify(talk).toLowerCase();
  const query = text.toLowerCase();

  return content.includes(query)
}


async function getCachedData() {
  if (cache.placeholder) {
    const resp = await fetch('https://frontendday.descompliqueapps.com.br/index.php/wp-json/site/v1/data');
    cache = await resp.json();
  }

  return cache;
}

function withTopics(cards) {

  return [
    ...cards,
    {
      title: "ABERTURA",
      hour: "09:00",
      type: "topic",
    },
    {
      title: "NETWORKING",
      hour: "10:00",
      type: "topic",
    },
    {
      title: "INTERVALO ALMOÇO",
      hour: "12:00",
      type: "topic",
    },
    {
      title: "COFFEE BREAK + NETWORKING",
      hour: "15:50",
      type: "topic",
    },
    {
      title: "SORTEIOS DE BRINDES E PARTICIPANTES DO CODANDO NO BREU",
      hour: "16:45",
      type: "topic",
    },
    {
      title: "ENCERRAMENTOS DAS PALESTRAS",
      hour: "18:00",
      type: "topic",
    },
    {
      title: "CODANDO NO BREU | CODE IN THE DARK",
      hour: "18:30",
      type: "topic",
    }
  ];
}


async function repositorioTalks(type) {
  const data = await getCachedData();
  // podemos adicionar os dados de topicos aqui!
  const all = [
    ...data.talks.principal,
    ...data.talks.invite,
    ...data.talks.frontend,
    ...data.talks.communities,
  ];

  // TODO: order by time

  switch (type) {
    case 'all':
      return all;
    case 'saved':
      return all.filter(talk => hasSaved(talk));
    default:
      return [
        ...data.talks.principal,
        ...data.talks[type],
      ];
  }
}

// atrasando a execução de uma função: 
// https://www.freecodecamp.org/portuguese/news/debounce-como-atrasar-a-execucao-de-uma-funcao-em-javascript-exemplo-com-js-es6/
function debounce(fn, delay = 500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

window.handleToggleSave = handleToggleSave;

el.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});