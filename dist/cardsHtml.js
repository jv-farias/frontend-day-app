import { cardsData } from "./dados.js";
import { apresentaCard } from '../dist/cards.js'

const cardsProcessados = apresentaCard(cardsData);

export const htmlGerado = cardsProcessados.map(card => {
    if (card.tipo === 'card-palestrante') {
        // Gere o HTML para um card de palestrante
        return `
        <div class="cards-palestrante-content">
        
        <div class="palestrante-picture">
        <img src="../assets/palestrantes/${card.nomeArquivoImagem}" alt="${card.nome}">
        </div>
        
        <div class="card-informacoes">
        <div class= "informacoes-palestrante">
        <h3 id="nome" class="nome">${card.nome}</h3>
                <p id="cargo" class="cargo">${card.cargo}</p>
                </div>
                <div class= "informacoes-palestra">
                <p id="assunto" class="assunto">${card.assunto}</p>
                </div>
                </div>
                
                <div class="palestrante-meta">
                <div class="redes-sociais">
                <a href="https://www.linkedin.com/in/${card.linkedin}/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/${card.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
                
                <div class="horario">
                    <p id="horario">${card.horario}</p>
                </div>
            </div>
            </div>`;
    } else if (card.tipo === 'card-topico') {
        return `
        <div class="cards-topicos-content">
        <div>
                <p id="horario-topico" class="horario-topico" >${card.horario}</p>
                </div>
                <div class="nome-topico">
                <p id="nome-topico">${card.topico}</p>
                </div>
                </div>`;
    } else {
        return `<div>
            <p>ERROR</p>
            </div>`;
    }
}).join('');

document.querySelector("#cards-cronograma").innerHTML = htmlGerado;