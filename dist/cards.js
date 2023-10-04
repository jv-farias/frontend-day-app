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
let info = [
    {
        topico: "Almoço",
        horario: "11:00",
        tipo: "card-topico"
    }
];
let cards = [
    ...card,
    ...info
];
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
