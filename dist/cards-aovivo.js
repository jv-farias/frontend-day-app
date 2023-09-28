"use strict";
let cardsAoVivo = [
    {
        nome: "ABRAÃO ALVES",
        nomeArquivoImagem: "abraao-alves.webp",
        cargo: "Software Engineer Beakyn",
        assunto: "Typescript Morreu! Vida longa ao Typescript!",
        horario: "11:00",
        dataStart: "",
        dataEnd: "",
        trilha: "",
        tipo: "card-palestrante-AoVivo"
    },
];
let infoAoVivo = [
    {
        topico: "Almoço",
        horario: "11:00",
        nomeArquivoImagem: "../assets/gifs/almoco.gif",
        dataStart: "",
        dataEnd: "",
        tipo: 'card-topico-AoVivo'
    }
];
let cardsaovivo = [
    ...cardsAoVivo,
    ...infoAoVivo
];
export function apresentaCardAoVivo(cardsaovivo) {
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
                trilha: notificacao.trilha,
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

document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(function () {
        var loader = document.getElementById("loader");
        loader.style.display = "none";
        var contentContainer = document.querySelector(".content-container");
        contentContainer.style.display = "block";
    }, 3000); 
});







