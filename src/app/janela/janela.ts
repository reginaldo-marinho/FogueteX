export interface IJanela{
   codigo:string,
   descricao:string
   buttons:IBotoes[],
   quadro:IQuadro[]
}
export interface IQuadro{
  name:string,
  type:string,
  id:string,
  Identificador:string
  campo:ICampo[]
}

export interface IBotoes{
  codigo:string,
  name:string,
  evento:string,
  icon:string
}
export interface ICampo{
  id:string,
  descricao:string,
  type:string,
  maxlength:number,
  max:36,
  min:36,
  required:1,
  Acessibilidade:1,
  RegraNecogio:string,
  chave:string,
  value:string,
  inJson:boolean
}

enum TipoBotao{
  crud = "crud" ,
  especifico = "especifico"
}