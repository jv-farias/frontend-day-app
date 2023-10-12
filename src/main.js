import { getSavedTalkIds, setSavedTalkIds } from "./LocalStorage";
import "./loading.js";
import { debounce } from "./Utils.js";
import { search } from "./search.js";

// inicio do main.js
// criando um apelido para a função querySelectorAll
const $ = (s) => document.querySelectorAll(s);

const [el] = $('#search-box-input');
const [ul] = $('.cards-container');
const tabs = $('input[name="tab"]')


// inicia os dados
fillList();

// registra os eventos
el.addEventListener('input', debounce(async function (el) {
  const { value: query } = el.target;
  const [{ value: tab }] = $('input[name="tab"]:checked');

  fillList(tab, query);
}));

el.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      fillList();
  }
});

Array.from(tabs).forEach((radio) => {
  radio.addEventListener('change', function () {
    fillList(this.value, el.value);
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
    fillList('saved', el.value);
  }
}
// fim do main.js
// fim dos registros  eventos

async function fillList(type, text) {
  ul.innerHTML = await search(type, text);
}

