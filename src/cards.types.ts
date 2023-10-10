export type Palestrante = {
  nome: string,
  nomeArquivoImagem: string,
  cargo: string,
  assunto: string,
  linkedin: string,
  instagram: string,
  horario: string,
  tipo: 'card-palestrante'
};

export type Topico = {
  horario: string,
  topico: string,
  tipo: 'card-topico'
};

export type Card = Palestrante | Topico;
