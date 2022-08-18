export interface IJanela {
  codigo: string;
  descricao: string;
  buttons: IBotoes[];
  quadro: IQuadro[];
}
export interface IQuadro {
  name: string;
  type: string;
  id: string;
  Identificador: string;
  fk: string;
  campo: ICampo[];
}

export interface IBotoes {
  id: string;
  name: string;
  evento: string;
  icon: string;
  tipoBotao: TipoBotao;
  descricao?: string;
}
export interface ICampo {
  id: string;
  descricao: string;
  type: string;
  maxlength: number;
  max: number;
  min: number;
  required: boolean | 0 | 1;
  Acessibilidade: 1;
  RegraNecogio: string;
  chave: string;
  value: string;
  inJson: boolean;
}

export enum TipoBotao {
  crud = "crud",
  especifico = "especifico",
  apoioJanela = "apoioJanela",
}
