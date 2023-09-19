type Palestrante = {
    nome: string,
    nomeArquivoImagem: string,
    cargo: string,
    assunto: string,
    linkedin: string,
    instagram: string,
    horario: string,
    tipo: 'card-palestrante'
};

type Topico = {
    horario: string,
    topico: string,
    tipo: 'card-topico'
};

type Card = Palestrante | Topico;

let card: Palestrante[] = [
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

let info: Topico[] = [
    {
        topico: "Almoço",
        horario: "11:00",
        tipo: "card-topico"
    }
];

let cards: Card[] = [
    ...card,
    ...info
];

function apresentaCard(cards: Card[]) {
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
                tipo: 'card-palestrante' // Adicione o tipo aqui, se necessário.
            };
        }
        if (notificacao.tipo === 'card-topico') {
            return {
                topico: notificacao.topico,
                horario: notificacao.horario,
                tipo: 'card-topico' // Adicione o tipo aqui, se necessário.
            };
        }
        // Adicione um tratamento para tipos desconhecidos, se necessário.
        return {
            tipo: 'tipo-desconhecido', // Adicione o tipo aqui, se necessário.
        };
    });
}
