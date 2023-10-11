import "/src/loading.js";


// inicio do main.js
// criando um apelido para a função querySelectorAll
const $ = (s) => document.querySelectorAll(s);

const [el] = $('#search-box-input');
const [ul] = $('.cards-container');
const radios = $('input[name="tab"]')
let cache = { placeholder: true, talks: { principal: [], invite: [], frontend: [], communities: [] } };

// inicia os dados
search();


// registra os eventos
el.addEventListener('input', debounce(async function (el) {
  const { value: query } = el.target;
  const [{ value: tab }] = $('input[name="tab"]:checked');

  search(tab, query);
}));

Array.from(radios).forEach((radio) => {
  radio.addEventListener('change', function () {
    search(this.value, '');
  })
})
// fim do main.js





// funcoes auxiliares

function handleToggleSave(e) {
  if (e.checked) {
    addSavedIdTalk(+e.dataset.id);
  } else {
    removeSavedIdTalk(+e.dataset.id);
  }
}

// fim dos registros  eventos

async function search(type = 'all', text = '') {
  // perguntar ao dados
  const data = await repositorioTalks(type);

  const list = text ? data.filter((talk) => talkHasText(talk, text)) : data;

  const sorted = list.sort((a, b) => b.hour - a.hour);
  const itens = sorted.map((talk) => renderTalk(talk));

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

async function repositorioTalks(type) {
  const data = await getCachedData();
  // podemos adicionar os dados de topicos aqui!

  const all = [
    ...data.talks.principal,
    ...data.talks.invite,
    ...data.talks.frontend,
    ...data.talks.communities
  ];

  // TODO: order by time

  switch (type) {
    case 'all':
      return all;
    case 'saved':
      return all.filter(hasSaved);
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



function renderTalk(talk) {
  const saved = hasSaved(talk);

  return ` <li class="cards-palestrante-content">
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
  <div class="action">
  <label><input type="checkbox" data-id="${talk.id}" ${saved ? 'checked' : ''} onclick="handleToggleSave(this)" /><span></span></label>
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
              <p class="trilhaPalestrante">Trilha: ${talk.room}</p>
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
