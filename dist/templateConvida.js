import { apresentaCard } from "./cards.js";
import { cardsConvida } from "./dadosConvida.js";

export const cardsProcessadosConvida = apresentaCard(cardsConvida);
export const htmlConvida = cardsProcessadosConvida
  .map((card) => {
    if (card.tipo === "card-palestrante") {
      // Gere o HTML para um card de palestrante
      return `
      <li class="cards-cronograma-content">
      <div class="info-cards-top">
          <div class="horario">
              <p id="horario-palestra" class="horario-palestra">${card.horario}</p>
          </div>
          <div class="text-palestra">
              <p>PALESTRA</p>
          </div>
      </div>
      <div class="media-informacoes">
          <div class="img-profile">
              <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
          </div>
          <div class="palestrante-cronograma-trilhas">
              <div class="text-informacoes">
                  <div class="nome">
                      <h3 id="${card.nome}" class="nome hidden">${card.nome}</h3>
                      <p id="cargo" class="cargo">${card.cargo}</p>
                  </div>
                  <div class="redes-profile">
                      <div class="linkedin-user">
                          <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i
                                  class="fa-brands fa-linkedin"></i><p class="linkedin">Linkedin</p></a>
                      </div>
                      <div class="instagram-user">
                          <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i
                                  class="fa-brands fa-instagram"></i><p class="instagram">Instagram</p></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="tema-palestra">
          <div class="info-palestra">
              <p id="assunto" class="assunto">${card.assunto}</p>
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
