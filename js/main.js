import { apresentaCard } from '../dist/cards.js'
import { initCarousel } from '../js/carrossel.js'


const cardsData = [
    {
        topico: "ABERTURA",
        horario: "9:00",
        tipo: "card-topico"
    },
    {
        nome: "JEAN LIVINO",
        nomeArquivoImagem: "jean-livino.webp",
        cargo: "Desenvolvedor Front-End iFood",
        assunto: "A realidade de trabalhar em projetos que usam IA",
        linkedin: "jeanlivino",
        instagram: "jeanlivino",
        horario: "09:15",
        tipo: "card-palestrante"
    },
    {
        nome: "CJ PATOILO",
        nomeArquivoImagem: "cj-patoilo.webp",
        cargo: "Criador do Miligram.io e Airform.io",
        assunto: "Keynote - Arquitetura",
        instagram: "cjpatoilo",
        linkedin: "cjpatoilo",
        horario: "09:30",
        tipo: "card-palestrante"
    },
    {
        topico: "NETWORKING",
        horario: "10:00",
        tipo: "card-topico"
    },
    {
        nome: "BRUNO BARROSO",
        nomeArquivoImagem: "bruno-barroso.webp",
        cargo: "Tech Project Manager Doutor Finanças - Portugal",
        assunto: "Carreira & Tecnologia & Bacalhau",
        instagram: "brunorbarroso",
        linkedin: "brunorbarroso",
        horario: "10:40",
        tipo: "card-palestrante"
    },
    {
        nome: "VICTOR NERY",
        nomeArquivoImagem: "victor-nery.webp",
        cargo: "Tech Lead zFlow",
        assunto: "Programando com ChatGPT",
        instagram: "victornery.dev",
        linkedin: "victornerytx",
        horario: "10:40",
        tipo: "card-palestrante"
    },
    {
        nome: "ABRAÃO ALVES",
        nomeArquivoImagem: "abraao-alves.webp",
        cargo: "Software Engineer Beakyn",
        assunto: "Typescript Morreu! Vida Longa ao Typescript!",
        instagram: "abraao.alves_",
        linkedin: "abraaoalves",
        horario: "11:00",
        tipo: "card-palestrante"
    },
    {
        nome: "ELOISE FERREIRA",
        nomeArquivoImagem: "eloise-ferreira.webp",
        cargo: "Desenvolvedora Front-End IREDE",
        assunto: "Inclusão Digital: WCAG e Acessibilidade na Web",
        instagram: "",
        linkedin: "eloise-ferreira",
        horario: "11:20",
        tipo: "card-palestrante"
    },
    {
        nome: "BRUNO SILVA",
        nomeArquivoImagem: "bruno-silva.webp",
        cargo: "Full Stack Developer Unimed",
        assunto: "Angular e Inteligência Artificial: Como integrar IA em Aplicações Web",
        instagram: "brumsilva",
        linkedin: "brumsilva",
        horario: "11:40",
        tipo: "card-palestrante"
    },
    {
        topico: "INTERVALO ALMOÇO",
        horario: "12:00",
        tipo: "card-topico"
    },
    {
        nome: "HEYDE MOURA",
        nomeArquivoImagem: "heyde-moura.webp",
        cargo: "Senior Software Engineer Automattic",
        assunto: "React para extender o Editor de Blocos do WordPress",
        instagram: "heydelicias",
        linkedin: "heyde-moura-3387a67b",
        horario: "13:30",
        tipo: "card-palestrante"
    },
    {
        nome: "FELIPE CÉSAR",
        nomeArquivoImagem: "felipe-cesar.webp",
        cargo: "Desenvolvedor Front-End Globo",
        assunto: "React com TDD: Da Teoria à Prática",
        instagram: "felipecesr",
        linkedin: "felipecesr",
        horario: "13:50",
        tipo: "card-palestrante"
    },
    {
        nome: "ISMAEL ASH",
        nomeArquivoImagem: "ismael-ash.webp",
        cargo: "Senior Software Developer 3blocks",
        assunto: "React.js para entrevistas",
        instagram: "oismaelash",
        linkedin: "oismaelash",
        horario: "14:10",
        tipo: "card-palestrante"
    },
    {
        nome: "IAN RAMOS",
        nomeArquivoImagem: "ian-ramos.webp",
        cargo: "Senior Software Engineer Automattic",
        assunto: "Como ter um pet pode te ajudar a ser um programador melhor",
        instagram: "ianramosc_",
        linkedin: "ianramosc",
        horario: "14:30",
        tipo: "card-palestrante"
    },
    {
        nome: "LUCAS ALMEIDA",
        nomeArquivoImagem: "lucas-almeida.webp",
        cargo: "Senior Software Engineering Chilli Piper",
        assunto: "Explorando React Server Components",
        instagram: "tsirlucas",
        linkedin: "tsirlucas",
        horario: "14:50",
        tipo: "card-palestrante"
    },
    {
        nome: "KEVIN TAVARES",
        nomeArquivoImagem: "kevin-tavares.webp",
        cargo: "Software Engineer Elo7",
        assunto: "Progressive Enhancement: O que é e como usá-lo?",
        instagram: "kevinbtv",
        linkedin: "kevinbtv",
        horario: "15:10",
        tipo: "card-palestrante"
    },
    {
        nome: "JOÃO WILLAMY",
        nomeArquivoImagem: "joao-willamy.webp",
        cargo: "Senior Software Engineering iFood",
        assunto: "E2E com Cypress",
        instagram: "",
        linkedin: "joao-willamy",
        horario: "15:30",
        tipo: "card-palestrante"
    },
    {
        topico: "COFFEE BREAK + NETWORKING",
        horario: "15:50",
        tipo: "card-topico"
    },
    {
        topico: "SORTEIOS DE BRINDES E PARTICIPANTES DO CODANDO NO BREU",
        horario: "16:45",
        tipo: "card-topico"
    },
    {
        nome: "WILLIAN FRANTZ",
        nomeArquivoImagem: "willian-frantz.webp",
        cargo: "Senior Software Engineer Riot Games",
        assunto: "Código nos jogos: Minha experiência na Riot Games",
        instagram: "",
        linkedin: "willianfrantz",
        horario: "17:00",
        tipo: "card-palestrante"
    },
    {
        nome: "ADRIANA SATY",
        nomeArquivoImagem: "adriana-saty.webp",
        cargo: "Criadora de Conteúdo WebSaty",
        assunto: "Data Driven na vida pessoal",
        instagram: "adriana.saty",
        linkedin: "adriana-saty",
        horario: "17:30",
        tipo: "card-palestrante"
    },
    {
        topico: "ENCERRAMENTOS DAS PALESTRAS",
        horario: "18:00",
        tipo: "card-topico"
    },
    {
        topico: "CODANDO NO BREU | CODE IN THE DARK",
        horario: "18:30",
        tipo: "card-topico"
    },
];



const cardsProcessados = apresentaCard(cardsData);

const htmlGerado = cardsProcessados.map(card => {
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

// Insira o HTML gerado no elemento cards-cronograma
document.querySelector("#cards-cronograma").innerHTML = htmlGerado;

function proximaTrilha() {
    document.getElementById("cronograma-frontend").classList.remove("hidden");
}

function trilhaAnterior() {
    document.getElementById("cronograma-frontend").classList.add("hidden");
}

function trocadorDeTrilha() {
    const Proxima = document.getElementById("botao1");
    const Anterior = document.getElementById("botao2");

    Proxima.addEventListener("click", proximaTrilha);
    Anterior.addEventListener("click", trilhaAnterior);
}

trocadorDeTrilha();

initCarousel();