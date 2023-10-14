import { hasSaved } from "./LocalStorage";

/** @type {import('./api.types').Event} */
let cache = { placeholder: true, talks: { principal: [], invite: [], frontend: [], communities: [] } };

async function getCachedData() {
  if (cache.placeholder) {
    const resp = await fetch('https://frontendday.descompliqueapps.com.br/index.php/wp-json/site/v1/data', {
      cache: 'reload'
    });
    cache = await resp.json();
  }

  return cache;
}
export function withTopics(cards) {

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
      hour: "16:20",
      type: "topic",
    },
    {
      title: "SORTEIOS DE BRINDES E PARTICIPANTES DO CODANDO NO BREU",
      hour: "17:00",
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
export async function repositorioTalks(type) {
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
