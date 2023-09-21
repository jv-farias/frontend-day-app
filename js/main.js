import { apresentaCard } from '../dist/cards.js'
import { apresentaLogo } from '../dist/colaboradores.js';

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

document.querySelector("#cards-cronograma").innerHTML = htmlGerado;


const logosData = [
    {
        nome: "Rocketseat",
        nomeArquivoImagem: "rocketseat.webp",
    },

    {
        nome: "H2U Santos Dumont",
        nomeArquivoImagem: "h2u-santos-dumont.webp",
    },

    {
        nome: "Instituto Poliglota de Línguas e Culturas",
        nomeArquivoImagem: "instituto-poliglota.webp",
    },

    {
        nome: "Casa do Código",
        nomeArquivoImagem: "casa-do-codigo.webp",
    },

    {
        nome: "Video Rama",
        nomeArquivoImagem: "video-rama.webp",
    },

    {
        nome: "Sticker Devs",
        nomeArquivoImagem: "stickers-devs.webp",
    },

    {
        nome: "Mundo sem Fio",
        nomeArquivoImagem: "mundo-sem-fio.webp",
    },
]

const logosProcessadas = apresentaLogo(logosData);

const carrosselHtmlGerado = logosProcessadas.map(colaborador => {
    return `
        <img src="../assets/logos/${colaborador.nomeArquivoImagem}" alt="${colaborador.nome}">`;
}).join('');

document.querySelector("#logos-slide").innerHTML = carrosselHtmlGerado;



const cardsData1 = [
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
        nome: "ALYNNE FERREIRA",
        nomeArquivoImagem: "alynne-ferreira.webp",
        cargo: "Software Engineer Shape",
        assunto: "Grafos e Vogue Dance: usando estrutura de dados para criar coreografias",
        instagram: "brunorbarroso",
        linkedin: "brunorbarroso",
        horario: "10:40",
        tipo: "card-palestrante"
    },
    {
        nome: "ADRIAN MAYCON",
        nomeArquivoImagem: "adrian-maycon.webp",
        cargo: "Desenvolvedor Front End MERX",
        assunto: "Novos Caminhos e Networking: O Papel das Comunidades de Tech",
        instagram: "victornery.dev",
        linkedin: "victornerytx",
        horario: "11:20",
        tipo: "card-palestrante"
    },
    {
        nome: "EWERTON NEPOMUCENO",
        nomeArquivoImagem: "ewerton-nepomuceno.webp",
        cargo: "UX/UI Designer VMetrix",
        assunto: "Design System e Tokens",
        instagram: "abraao.alves_",
        linkedin: "abraaoalves",
        horario: "11:40",
        tipo: "card-palestrante"
    },
    {
        topico: "INTERVALO ALMOÇO",
        horario: "12:00",
        tipo: "card-topico"
    },
    {
        nome: "CAUAN VICTOR",
        nomeArquivoImagem: "cauan-victor.webp",
        cargo: "Engenheiro de Software Normalabs",
        assunto: "React Native em 2024: Por onde começar?",
        instagram: "",
        linkedin: "eloise-ferreira",
        horario: "13:30",
        tipo: "card-palestrante"
    },
    {
        nome: "ROSE FÉLIX",
        nomeArquivoImagem: "rose-felix.webp",
        cargo: "QA Profectum",
        assunto: "PyLadies Fortaleza: História e fundação",
        instagram: "brumsilva",
        linkedin: "brumsilva",
        horario: "13:50",
        tipo: "card-palestrante"
    },

    {
        nome: "NOEMI CUNHA",
        nomeArquivoImagem: "noemi-cunha.webp",
        cargo: "Desenvolvedora Front-End Uol",
        assunto: "Dominando as Soft Skills para uma Jornada na Tecnologia",
        instagram: "heydelicias",
        linkedin: "heyde-moura-3387a67b",
        horario: "14:10",
        tipo: "card-palestrante"
    },
    {
        nome: "SÍLVIA MUNIZ",
        nomeArquivoImagem: "silvia-muniz.webp",
        cargo: "Tech Lead e Scrum Master Governo do Estado do Ceará",
        assunto: "Como impulsionar sua carreira através das comunidades de tecnologia",
        instagram: "felipecesr",
        linkedin: "felipecesr",
        horario: "14:50",
        tipo: "card-palestrante"
    },
    {
        nome: "ROMÊNIA SOUSA",
        nomeArquivoImagem: "romenia-sousa.webp",
        cargo: "Product Manager PicPay",
        assunto: "Discovery de Produtos: Os desafios na busca de entregar soluções simples de alto valor",
        instagram: "oismaelash",
        linkedin: "oismaelash",
        horario: "15:10",
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

const cardsData2 = [
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
        nome: "RACHEL CARVALHO",
        nomeArquivoImagem: "rachel-carvalho.webp",
        cargo: "Product Designer Agenda Edu",
        assunto: "UX e Handoff, a passagem do designer para o dev",
        instagram: "kellrcarvlho",
        linkedin: "kellrcarvalho",
        horario: "10:40",
        tipo: "card-palestrante"
    },
    {
        nome: "WESLEY JONATHA",
        nomeArquivoImagem: "wesle-jonatha.webp",
        cargo: "Desenvolvedor Stefanini",
        assunto: "Introdução ao Golang e Micro Serviços: Eficiência e Escalabilidade",
        instagram: "wesleyj.dev",
        linkedin: "wesley-jonatha-9329ba18a",
        horario: "11:00",
        tipo: "card-palestrante"
    },
    {
        nome: "PMENOS LAB",
        nomeArquivoImagem: "time-pmenos-lab.webp",
        cargo: "Líderes Times de Inovação,Hub de Saúde, Ecommerce e App",
        assunto: "Ecossistema VTEX e Alavancando Resultados com um App Gerencial",
        instagram: "pmenoslab",
        linkedin: "",
        horario: "11:20",
        tipo: "card-palestrante"
    },
    {
        topico: "INTERVALO ALMOÇO",
        horario: "12:00",
        tipo: "card-topico"
    },
    {
        nome: "VINÍCIUS CAMPITELLI",
        nomeArquivoImagem: "vinicius-campitelli.webp",
        cargo: " Developer Relations FusionAuth",
        assunto: "O que você precisa saber sobre autenticação com JWT",
        instagram: "vinicius.campitelli",
        linkedin: "viniciuscampitelli",
        horario: "13:30",
        tipo: "card-palestrante"
    },
    {
        nome: "VICTOR ALENCAR",
        nomeArquivoImagem: "victor-alencar.webp",
        cargo: "CTO Sunne Energias",
        assunto: "Do Console à Sala de Reunião: profissionalismo na entrevista e na empresa",
        instagram: "vtormuniz",
        linkedin: "victor-alencar712762140",
        horario: "13:50",
        tipo: "card-palestrante"
    },

    {
        nome: "MATHEUS LOUREIRO",
        nomeArquivoImagem: "matheus-loureiro.webp",
        cargo: "Co-Founder e Idealizador de soluções bh2 Tecnologia e Finanças",
        assunto: "O que temos de oportunidade?",
        instagram: "",
        linkedin: "callmeloureiro",
        horario: "14:10",
        tipo: "card-palestrante"
    },
    {
        nome: "RENATA E KEL",
        nomeArquivoImagem: "renata-e-kel.webp",
        cargo: "Sócias Evo Contábil",
        assunto: "Contabilidade básica para o empreendedor, PJ e CLT",
        instagram: "evocontabil",
        linkedin: "",
        horario: "14:30",
        tipo: "card-palestrante"
    },
    {
        nome: "MILENA TAVEIRA",
        nomeArquivoImagem: "milena-taveira.webp",
        cargo: " UX Designer LSBD",
        assunto: "Transição de carreira: migrando para UX",
        instagram: "milenatav",
        linkedin: "taveiram",
        horario: "14:50",
        tipo: "card-palestrante"
    },
    {
        nome: "AMÁLIA MOURA",
        nomeArquivoImagem: "amalia-moura.webp",
        cargo: "Especialista em carreira Rocketseat",
        assunto: "Além dos Códigos: Tudo que você precisa saber para conquistar sua vaga",
        instagram: "amaliabeatrizmoura",
        linkedin: "amáliabeatrizmoura",
        horario: "15:10",
        tipo: "card-palestrante"
    },
    {
        nome: "LETÍCIA SILVA",
        nomeArquivoImagem: "leticia-silva.webp",
        cargo: "Software Engineering Manager iFood",
        assunto: "Em Breve",
        instagram: "",
        linkedin: "leticiasilvar",
        horario: "14:50",
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


const cardsProcessados1 = apresentaCard(cardsData1);

const htmlGerado1 = cardsProcessados1.map(card => {
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

document.querySelector("#cards-comunidade").innerHTML = htmlGerado1;

const cardsProcessados2 = apresentaCard(cardsData2);

const htmlGerado2 = cardsProcessados2.map(card => {
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

document.querySelector("#cards-convida").innerHTML = htmlGerado2;


const btnFrontEnd = document.getElementById("trocar-frontend");
const btnComunidade = document.getElementById("trocar-comunidade");
const btnConvida = document.getElementById("trocar-convida");

const cronogramaFrontEnd = document.getElementById("cronograma-frontend");
const cronogramaComunidade = document.getElementById("cronograma-comunidade");
const cronogramaConvida = document.getElementById("cronograma-convida");

btnFrontEnd.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "block";
    cronogramaComunidade.style.display = "none";
    cronogramaConvida.style.display = "none";
});

btnComunidade.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "none";
    cronogramaComunidade.style.display = "block";
    cronogramaConvida.style.display = "none";
});

btnConvida.addEventListener("click", function () {
    cronogramaFrontEnd.style.display = "none";
    cronogramaComunidade.style.display = "none";
    cronogramaConvida.style.display = "block";
});


