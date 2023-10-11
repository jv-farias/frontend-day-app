import "/src/loading.js";

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

Array.from(tabs).forEach((radio) => {
  radio.addEventListener('change', function () {
    search(this.value, el.value);
  })
})
// fim do main.js
// funcoes auxiliares

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
    search('saved', '');
  }
}
// fim dos registros  eventos

async function search(type = 'all', text = '') {
  // perguntar ao dados
  const data = await repositorioTalks(type);
  const all = withTopics(data);
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

/** @param {Talk} */
function hasSaved(talk) {
  const savedIds = getSavedTalkIds();

  return savedIds.includes(talk.id);
}

/** @return {Array<string>} */
function getSavedTalkIds() {
  const lcContent = localStorage.getItem('savedIdTalks') || '[]';
  return JSON.parse(lcContent) || [''];
}

/** @type {Array<string>} ids*/
function setSavedTalkIds(ids = []) {
  const lcContent = JSON.stringify(ids);
  localStorage.setItem('savedIdTalks', lcContent);
}

/** @type {string} id*/
function addSavedIdTalk(id) {
  const ids = getSavedTalkIds();
  const removeDuplicates = [...ids, id];
  // remove possible duplicates;
  setSavedTalkIds(removeDuplicates);
}

function removeSavedIdTalk(id) {
  const ids = getSavedTalkIds();
  setSavedTalkIds(ids.filter((item) => item !== id));
}

function renderTopic(card) {
  return `<li class="topicos-cronograma-content">
          <div>
            <p id="horario-topico" class="horario-topico">${card.hour}</p>
          </div>
          <div class="nome-topico">
            <p id="nome-topico">${card.title}</p>
          </div>
        </li>`;
}


function renderTalk(talk) {
  const saved = hasSaved(talk);

  // Mapeamento de substituição
  const roomMappings = {
    'principal': 'Auditório',
    'invite': 'Convida',
    'frontend': 'Front-End',
    'communities': 'Comunidades',
  };

  // Verifique se o tipo de sala está no mapeamento e faça a substituição
  const roomName = roomMappings[talk.room] || talk.room;

  return `<li class="cards-palestrante-content">
  <div class="info-post">
      <div class="user">
          <div class="user-img">
              <img src="./assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
          </div>
          <div class="user-nome">
              <p class="usuario">@frontendday2023</p>
              <p class="horarioLive">${talk.hour}</p>
          </div>
      </div>
  </div>
  <div class="palestrante">
  <div class="img-palestrante">
  <img src="${talk.speaker.image}" alt="${talk.title}" class="imag-palestrante">
  </div>
  <div class="info-palestrante">
  <div class="nome-cargo">
  <h3 class="nomePalestrante">${talk.speaker.title}</h3>
  <p class="cargoPalestrante">${talk.speaker.role} 
  ${talk.speaker.company}</p>
  </div>
  
  <div class="redes-profile">
  <div class="linkedin-user">
  <a href="${talk.speaker.social_link}" target="_blank"><i class="fa-brands fa-linkedin"></i>
  <p class="linkedin">Linkedin</p>
  </a>
  </div>
  </div>
  
  <div class="trilha">
  <p class="trilhaPalestrante">Trilha: ${roomName}</p>
  </div>
  <div class="action">
  <label><input type="checkbox" data-id="${talk.id}" ${saved ? 'checked' : ''} onclick="handleToggleSave(this)" /><span></span></label>
</div>
  </div>
  </div>
  <div class="assunto-palestra">
  <p class="assuntoLive">${talk.title}</p>
  </div>
  
</li>`;
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

el.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});