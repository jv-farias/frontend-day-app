import { apresentaCard } from "./cards.js";
import { apresentaCardAoVivo } from "./cards-aovivo.js";
import { cardsData, cardsDataAoVivo } from "./dados.js"; // FUNÇAO IMPORTADA - CARDS FRONTEND
import { cardsData1 } from "./dados.js";
import { cardsData2 } from "./dados.js";

// const cardsProcessados = apresentaCard(cardsData);
// export const htmlGerado = cardsProcessados.map(card => {
//     if (card.tipo === 'card-palestrante') {
//         // Gere o HTML para um card de palestrante
//         return `
//         <div class="cards-palestrante-content">

//         <div class="palestrante-picture">
//         <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
//         </div>

//         <div class="card-informacoes">
//         <div class= "informacoes-palestrante">
//         <h3 id="nome" class="nome">${card.nome}</h3>
//                 <p id="cargo" class="cargo">${card.cargo}</p>
//                 </div>
//                 <div class= "informacoes-palestra">
//                 <p id="assunto" class="assunto">${card.assunto}</p>
//                 </div>
//                 </div>

//                 <div class="palestrante-meta">
//                 <div class="redes-sociais">
//                 <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
//                 <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
//                 </div>

//                 <div class="horario">
//                     <p id="horario">${card.horario}</p>
//                 </div>
//             </div>
//             </div>`;
//     } else if (card.tipo === 'card-topico') {
//         return `
//         <div class="cards-topicos-content">
//         <div>
//                 <p id="horario-topico" class="horario-topico" >${card.horario}</p>
//                 </div>
//                 <div class="nome-topico">
//                 <p id="nome-topico">${card.topico}</p>
//                 </div>
//                 </div>`;
//     } else {
//         return `<div>
//             <p>ERROR</p>
//             </div>`;
//     }
// }).join('');
// document.querySelector("#cards-cronograma").innerHTML = htmlGerado;

// const cardsProcessados1 = apresentaCard(cardsData1);
// export const htmlGerado1 = cardsProcessados1.map(card => {
//     if (card.tipo === 'card-palestrante') {
//         // Gere o HTML para um card de palestrante
//         return `
//         <div class="cards-palestrante-content">

//         <div class="palestrante-picture">
//         <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
//         </div>

//         <div class="card-informacoes">
//         <div class= "informacoes-palestrante">
//         <h3 id="nome" class="nome">${card.nome}</h3>
//                 <p id="cargo" class="cargo">${card.cargo}</p>
//                 </div>
//                 <div class= "informacoes-palestra">
//                 <p id="assunto" class="assunto">${card.assunto}</p>
//                 </div>
//                 </div>

//                 <div class="palestrante-meta">
//                 <div class="redes-sociais">
//                 <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
//                 <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
//                 </div>

//                 <div class="horario">
//                     <p id="horario">${card.horario}</p>
//                 </div>
//             </div>
//             </div>`;
//     } else if (card.tipo === 'card-topico') {
//         return `
//         <div class="cards-topicos-content">
//         <div>
//                 <p id="horario-topico" class="horario-topico" >${card.horario}</p>
//                 </div>
//                 <div class="nome-topico">
//                 <p id="nome-topico">${card.topico}</p>
//                 </div>
//                 </div>`;
//     } else {
//         return `<div>
//             <p>ERROR</p>
//             </div>`;
//     }
// }).join('');
// document.querySelector("#cards-comunidade").innerHTML = htmlGerado1;

// const cardsProcessados2 = apresentaCard(cardsData2);
// export const htmlGerado2 = cardsProcessados2.map(card => {
//     if (card.tipo === 'card-palestrante') {
//         // Gere o HTML para um card de palestrante
//         return `
//         <div class="cards-palestrante-content">

//         <div class="palestrante-picture">
//         <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
//         </div>

//         <div class="card-informacoes">
//         <div class= "informacoes-palestrante">
//         <h3 id="nome" class="nome">${card.nome}</h3>
//                 <p id="cargo" class="cargo">${card.cargo}</p>
//                 </div>
//                 <div class= "informacoes-palestra">
//                 <p id="assunto" class="assunto">${card.assunto}</p>
//                 </div>
//                 </div>

//                 <div class="palestrante-meta">
//                 <div class="redes-sociais">
//                 <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
//                 <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
//                 </div>

//                 <div class="horario">
//                     <p id="horario">${card.horario}</p>
//                 </div>
//             </div>
//             </div>`;
//     } else if (card.tipo === 'card-topico') {
//         return `
//         <div class="cards-topicos-content">
//         <div>
//                 <p id="horario-topico" class="horario-topico" >${card.horario}</p>
//                 </div>
//                 <div class="nome-topico">
//                 <p id="nome-topico">${card.topico}</p>
//                 </div>
//                 </div>`;
//     } else {
//         return `<div>
//             <p>ERROR</p>
//             </div>`;
//     }
// }).join('');
// document.querySelector("#cards-convida").innerHTML = htmlGerado2;

const cardsProcessadosAoVivo = apresentaCardAoVivo(cardsDataAoVivo);
export const htmlGeradoAoVivo = cardsProcessadosAoVivo
  .map((card) => {
    if (card.tipo === "card-palestrante-AoVivo") {
      return `
        <li data-start="${card.dataStart}" data-end="${card.dataEnd}" class="cards-palestrante-content">
                    <div class="info-post">
                        <div class="user">
                            <div class="user-img">
                                <img src="../assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
                            </div>
                            <div class="user-nome">
                                <p id="usuario">@frontendday2023</p>
                                <p id="horarioLive">${card.horario}</p>
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
                                <img src="../assets/logos/frontenday2023.svg" alt="Logo Front-End Day 2023">
                            </div>
                            <div class="user-nome">
                                <p id="usuario">@frontendday2023</p>
                                <p id="horarioLive">${card.horario}</p>
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
                        <div class="img-topico">
                            <img src="${card.nomeArquivoImagem}" alt="Gif Ursinho Pooh">
                        </div>
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
