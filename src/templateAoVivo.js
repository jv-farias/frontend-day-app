import "./loading.js";
import { dadosAoVivo, apresentaCardAoVivo } from "./dadosAoVivo.js";

const cardsProcessadosAoVivo = apresentaCardAoVivo(dadosAoVivo);
export const htmlGeradoAoVivo = cardsProcessadosAoVivo
  .map((card) => {
    if (card.tipo === "card-palestrante-AoVivo") {
      return `
        <li data-start="${card.dataStart}" data-end="${card.dataEnd}" class="cards-palestrante-content">
                    <div class="info-post">
                        <div class="user">
                            <div class="user-img">
                                <img src="./assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
                            </div>
                            <div class="user-nome">
                                <p class="usuario">@frontendday2023</p>
                                <p class="horarioLive">${card.horario}</p>
                            </div>
                        </div>
                        <button class="salvar-agenda">
                        <i class="fa-regular fa-bookmark" class="salvar-agenda"></i>
                        </button>
                    </div>
                    <div class="palestrante">
                        <div class="img-palestrante">
                            <img src="${card.nomeArquivoImagem}" alt="${card.nome}" class="imag-palestrante">
                        </div>
                        <div class="info-palestrante">
                            <div class="nome-cargo">
                                <p class="nomePalestrante">${card.nome}</p>
                                <p class="cargoPalestrante">${card.cargo}</p>
                            </div>
                            <div class="trilha">
                                <p class="trilhaPalestrante">Trilha: ${card.trilha}</p>
                            </div>
                        </div>
                    </div>
                    <div class="assunto-palestra">
                        <p class="assuntoLive">${card.assunto}</p>
                    </div>
                </li>
`;
    } else if (card.tipo === "card-topico-AoVivo") {
      return `
        <li data-start="${card.dataStart}" data-end="${card.dataEnd}" class="cards-topicos-content">
                    <div class="post-topico">
                        <div class="user">
                            <div class="user-img">
                                <img src="./assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
                            </div>
                            <div class="user-nome">
                                <p class="usuario">@frontendday2023</p>
                                <p class="horarioLive">${card.horario}</p>
                            </div>
                        </div>
                    </div>
                    <div class="topico">

                        <div class="info-topico">
                            <div class="nome-topico">
                                <p class="conteudo-topico">${card.topico}</p>
                            </div>
                        </div>
                    </div>
                </li>`;
    } else {
      return `<div>
            <p>ERROR</p>
            </div>`;
    }
  })
  .join("");
document.querySelector("#cards-cronograma").innerHTML = htmlGeradoAoVivo;
