type palestranteAoVivo = {
    nome: string,
    nomeArquivoImagem: string,
    cargo: string,
    assunto: string,
    horario: string,
    tipo: 'card-palestrante-AoVivo',
    dataStart: string,
    dataEnd: string
};

type topicoAoVivo = {
    horario: string,
    topico: string,
    nomeArquivoImagem: string,
    tipo: 'card-topico-AoVivo'
    dataStart: string,
    dataEnd: string
};

type CardAoVivo = palestranteAoVivo | topicoAoVivo;

let cardsAoVivo: palestranteAoVivo[] = [
    {
        nome: "ABRAÃO ALVES",
        nomeArquivoImagem: "abraao-alves.webp",
        cargo: "Software Engineer Beakyn",
        assunto: "Typescript Morreu! Vida longa ao Typescript!",
        horario: "11:00",
        dataStart: "",
        dataEnd: "",
        tipo: "card-palestrante-AoVivo"
    },
];

let infoAoVivo: topicoAoVivo[] = [
    {
        topico: "Almoço",
        horario: "11:00",
        nomeArquivoImagem: "./assets/gifs/almoco.gif",
        dataStart: "",
        dataEnd: "",
        tipo: 'card-topico-AoVivo'
    }
];

let cardsaovivo: CardAoVivo[] = [
    ...cardsAoVivo,
    ...infoAoVivo
];

function apresentaCardAoVivo(cardsaovivo: CardAoVivo[]) {
    return cardsaovivo.map(notificacao => {
        if (notificacao.tipo === 'card-palestrante-AoVivo') {
            return {
                nome: notificacao.nome,
                nomeArquivoImagem: notificacao.nomeArquivoImagem,
                cargo: notificacao.cargo,
                assunto: notificacao.assunto,
                horario: notificacao.horario,
                dataStart: notificacao.dataStart,
                dataEnd: notificacao.dataEnd,
                tipo: 'card-palestrante-AoVivo'
            };
        }
        if (notificacao.tipo === 'card-topico-AoVivo') {
            return {
                topico: notificacao.topico,
                horario: notificacao.horario,
                nomeArquivoImagem: notificacao.nomeArquivoImagem,
                dataStart: notificacao.dataStart,
                dataEnd: notificacao.dataEnd,
                tipo: 'card-topico-AoVivo'
            };
        }
        // Tratamento para tipos desconhecidos.
        return {
            tipo: 'tipo-desconhecido',
        };
    });
}
<<<<<<< HEAD:dist/cards-aovivo.js
// Página de loading

document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(function () {
        var loader = document.getElementById("loader");
        loader.style.display = "none";
        var contentContainer = document.querySelector(".content-container");
        contentContainer.style.display = "block";
    }, 3000); 
});







=======
>>>>>>> b7b0b38a049ef338b006c6686724920dc8125b4f:src/cards-aovivo.ts
