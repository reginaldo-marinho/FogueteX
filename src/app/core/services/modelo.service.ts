import { Injectable } from "@angular/core";
import { ICampo, IJanela, IQuadro } from "src/app/janela/janela";

@Injectable({ providedIn: "root" })
export class ModeloService {
  constructor() {}

  private Modelo!: string; /* Receberá um modelo em strutura JSON */
  private NovoModelo!: string; /* Usado quando um novo modelo está prester a ser criado - Aqui o modelo não terá valor nas suas propriedades*/

  get GetNovoModelo(): JSON {
    return JSON.parse(this.NovoModelo);
  }

  /* A setter. */
  set Setmodelo(Janela: IJanela) {
    this.Modelo = this.PreparaModelo(Janela);
  }
  get GetModelo(): JSON {
    return JSON.parse(this.Modelo);
  }
  /**
   * It creates a model JSON object from a given window
   * @param {IJanela} Janela - IJanela
   * @returns The model is being returned.
   **/
  private PreparaModelo(Janela: IJanela): string {
    this.Modelo = "";
    try {
      this.CriarObjetoPrincipal(Janela.quadro);
      this.Modelo = "{" + this.Modelo + "}";
    } catch (e) {
      alert(e);
    }
    return this.Modelo;
  }
  private CriarObjetoPrincipal(quadro: IQuadro[]) {
    quadro.forEach((quadro_, index) => {
      if (index == 0) this.CriarChaveValor(quadro_.campo);
      if (index > 0) this.CriarIdentificador(quadro_);
    });
  }
  private CriarChaveValor(campo: ICampo[]) {
    campo.forEach((c, index) => {
      if (typeof c.value === "string") this.PreparaChaveValorParaString(c);
      if (typeof c.value === "number") this.PreparaChaveValorParaNumero(c);
      if (index < campo.length - 1) this.Modelo = this.Modelo.concat(",");
    });
  }
  private CriarIdentificador(quadro: IQuadro) {
    if (quadro.Identificador)
      this.Modelo = this.Modelo.concat(
        ",",
        '"',
        quadro.Identificador,
        '"',
        ":",
        "{"
      );
    this.CriarChaveValor(quadro.campo);
    this.Modelo = this.Modelo.concat("}");
  }
  private PreparaChaveValorParaString(c: ICampo) {
    this.Modelo = this.Modelo.concat('"', c.chave, '"', ":", '"', c.value, '"');
  }
  private PreparaChaveValorParaNumero(c: ICampo) {
    this.Modelo = this.Modelo.concat('"', c.chave, '"', ":", c.value);
  }
}
