import { apresentaCard } from "./cards.js";
import { cardsData } from "./dados.js";
import { cardsData1 } from "./dados.js";
import { cardsData2 } from "./dados.js";

// const cardsProcessados = apresentaCard(cardsData);
// export const htmlGerado = cardsProcessados
//   .map((card) => {
//     if (card.tipo === "card-palestrante") {
//       // Gere o HTML para um card de palestrante
//       return `
//         <li>
//                     <div class="card">
//                         <div class="card-infos">
//                             <div class="card-top">
//                                 <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}" class="img-card">
//                                 <div class="horario-social">
//                                     <span class="horario">${card.horario}</span>
//                                     <a href="https://www.instagram.com/${card.instagram}/"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i></a>
//                                     <a href="https://www.linkedin.com/in/${card.linkedin}/"><i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i></a>
//                                 </div>
//                             </div>
//                             <div class="card-mid">
//                                 <p class="nome">${card.nome}</p>
//                                 <span class="cargo">${card.cargo}</span>
//                             </div>
//                             <div class="card-bottom">
//                                 <p class="assunto">${card.assunto}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </li>`;
//     } else if (card.tipo === "card-topico") {
//       return `
//         <li>
//                     <div class="card-topico">
//                         <div class="horario-topico"><p>${card.horario}</p></div>
//                         <div class="assunto-topico"><p>${card.topico}</p></div>
//                     </div>
//                 </li>`;
//     } else {
//       return `<div>
//             <p>ERROR</p>
//             </div>`;
//     }
//   })
//   .join("");
// document.querySelector("#cards-cronograma-frontend").innerHTML = htmlGerado;

// const cardsProcessados1 = apresentaCard(cardsData1);
// export const htmlGerado1 = cardsProcessados1
//   .map((card) => {
//     if (card.tipo === "card-palestrante") {
//       // Gere o HTML para um card de palestrante
//       return `
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
//     } else if (card.tipo === "card-topico") {
//       return `
//         <div class="cards-topicos-content">
//         <div>
//                 <p id="horario-topico" class="horario-topico" >${card.horario}</p>
//                 </div>
//                 <div class="nome-topico">
//                 <p id="nome-topico">${card.topico}</p>
//                 </div>
//                 </div>`;
//     } else {
//       return `<div>
//             <p>ERROR</p>
//             </div>`;
//     }
//   })
//   .join("");
// document.querySelector("#cards-comunidade").innerHTML = htmlGerado1;

const cardsProcessados = apresentaCard(cardsData);
export const htmlGerado = cardsProcessados
  .map((card) => {
    if (card.tipo === "card-palestrante") {
      // Gere o HTML para um card de palestrante
      return `
      <li  class="cards-cronograma-content">
      <div class="palestrante">
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
      <li class="cards-topicos-content">
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
document.querySelector("#cards-cronograma-frontend").innerHTML = htmlGerado;

const cardsProcessados1 = apresentaCard(cardsData1);
export const htmlGerado1 = cardsProcessados1
  .map((card) => {
    if (card.tipo === "card-palestrante") {
      // Gere o HTML para um card de palestrante
      return `
      <li  class="cards-cronograma-content">
      <div class="palestrante">
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
      <li class="cards-topicos-content">
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
document.querySelector("#cards-cronograma-comunidades").innerHTML = htmlGerado1;

const cardsProcessados2 = apresentaCard(cardsData2);
export const htmlGerado2 = cardsProcessados2
  .map((card) => {
    if (card.tipo === "card-palestrante") {
      // Gere o HTML para um card de palestrante
      return `
      <li  class="cards-cronograma-content">
      <div class="palestrante">
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
      <li class="cards-topicos-content">
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
document.querySelector("#cards-cronograma-convida").innerHTML = htmlGerado2;
