import { apresentaCard } from "./cards.js";
import { cardsConvida } from "./dadosConvida.js";

export const cardsProcessadosConvida = apresentaCard(cardsConvida);
export const htmlConvida = cardsProcessadosConvida
  .map((card) => {
    if (card.tipo === "card-palestrante") {
      // Gere o HTML para um card de palestrante
      return `
      <li  class="cards-cronograma-content">
      <div class="palestrante-cronograma">
        <div class="text-informacoes">
          <div class="nome">
            <h3 id="nome" class="nome">${card.nome}</h3>
            <p id="cargo" class="cargo">${card.cargo}</p>
          </div>
          <div class="info-palestra">
            <p id="assunto" class="assunto">${card.assunto}</p>
          </div>
        </div>
        <div class="media-informacoes">
          <div class="img-profile">
            <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
          </div>
          <div class="redes-profile">
            <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="horario">
            <p id="horario-palestra" class="horario-palestra">${card.horario}</p>
          </div>
        </div>
      </div>    
      </li>
`;
    } else if (card.tipo === "card-topico") {
      return `
      <li class="topicos-cronograma-content">
          <div>
                  <p id="horario-topico" class="horario-topico">${card.horario}</p>
                  </div>
                  <div class="nome-topico">
                  <p id="nome-topico">${card.topico}</p>
                  </div>
                </li>`;
    } else {
      return `<div>
            <p>ERROR</p>
            </div>`;
    }
  })
  .join("");
document.querySelector("#cards-cronograma-convida").innerHTML = htmlConvida
