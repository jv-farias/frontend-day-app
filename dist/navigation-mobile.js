let titulo = document.querySelector(".titulo");
let botoes = document.querySelectorAll(".content-trilhas");

export function destacarBotao(botaoClicado) {
  botoes.forEach((botao) => {
    botao.querySelector(".iconBtn i").style.color = "rgb(131, 131, 131)";
    botao.querySelector(".titulo-trilha").style.color = "rgb(131, 131, 131)";
  });
  botaoClicado.querySelector(".iconBtn i").style.color = "rgb(5, 125, 255)";
  botaoClicado.querySelector(".titulo-trilha").style.color = "rgb(5, 125, 255)";
  titulo.innerHTML = botaoClicado.querySelector(".titulo-trilha").textContent; // Atualizar o título da página de acordo com o botão / menu clicado
}
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    destacarBotao(botao);
  });
});

destacarBotao(botoes[0]); // Fará que o primeiro botão, do ao vivo fique sempre destacado
