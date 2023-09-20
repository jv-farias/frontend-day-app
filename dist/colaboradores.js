let colaborador = [
    {
        nome: "",
        nomeArquivoImagem: "",
    },
];
let colaboradores = [
    ...colaborador,
];
export function apresentaLogo(colaboradores) {
    return colaboradores.map(empresa => {
        return {
            nome: empresa.nome,
            nomeArquivoImagem: empresa.nomeArquivoImagem,
        };
    });
}
