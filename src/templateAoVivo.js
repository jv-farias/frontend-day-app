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
                        <div class="ao-vivo">
                            <div class="live-circle">
                            </div>
                            <div class="live-text">
                                <p>AO VIVO</p>
                            </div>
                        </div>
                    </div>
                    <div class="palestrante">
                        <div class="img-palestrante">
                            <img src="${card.nomeArquivoImagem}" alt="${card.nome}">
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
                        <p>${card.assunto}</p>
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
                        <div class="ao-vivo">
                            <div class="live-circle">
                            </div>
                            <div class="live-text-topico">
                                <p>AO VIVO</p>
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
