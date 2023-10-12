export function talkHasText(talk, text) {
  const content = JSON.stringify(talk).toLowerCase();
  const query = text.toLowerCase();

  return content.includes(query);
}
// atrasando a execução de uma função: 
// https://www.freecodecamp.org/portuguese/news/debounce-como-atrasar-a-execucao-de-uma-funcao-em-javascript-exemplo-com-js-es6/
export function debounce(fn, delay = 500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
