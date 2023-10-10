
/** @typedef {import("./cards.types").Card} Card */
/** @typedef {import("./cards.types").Palestrante} Palestrante */
/** @typedef {import("./cards.types").Topico} Topico */

/** @type {Array<Palestrante>} */
let card = [
    {
        nome: "ABRAÃO ALVES",
        nomeArquivoImagem: "abraao-alves.webp",
        cargo: "Software Engineer Beakyn",
        assunto: "Typescript Morreu! Vida longa ao Typescript!",
        linkedin: "abraaoalves",
        instagram: "abraao.alves_",
        horario: "11:00",
        tipo: "card-palestrante"
    },
];

/** @type {Array<Topico>} */
let info = [
    {
        topico: "Almoço",
        horario: "11:00",
        tipo: "card-topico"
    }
];

/** @type {Array<Card>} */
let cards = [
    ...card,
    ...info
];

/** @param {Array<Card>} cards */
export function apresentaCard(cards) {
    return cards.map(notificacao => {
        if (notificacao.tipo === 'card-palestrante') {
            return {
                nome: notificacao.nome,
                nomeArquivoImagem: notificacao.nomeArquivoImagem,
                cargo: notificacao.cargo,
                assunto: notificacao.assunto,
                linkedin: notificacao.linkedin,
                instagram: notificacao.instagram,
                horario: notificacao.horario,
                tipo: 'card-palestrante' 
            };
        }
        if (notificacao.tipo === 'card-topico') {
            return {
                topico: notificacao.topico,
                horario: notificacao.horario,
                tipo: 'card-topico' 
            };
        }
        // Tratamento para tipos desconhecidos.
        return {
            tipo: 'tipo-desconhecido', 
        };
    });
}
