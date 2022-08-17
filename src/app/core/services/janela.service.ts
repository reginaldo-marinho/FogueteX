import { Injectable, Renderer2 } from "@angular/core";
import { TipoBotao, IJanela, IBotoes } from "src/app/janela/janela";
import { default as JanelaJSON } from "src/app/janela/Janela.json";

@Injectable({
  providedIn: "root",
})
export class JanelaService {
  constructor(private rederer: Renderer2) {}

  public Janela: IJanela = JSON.parse(
    JSON.stringify(JanelaJSON.janela)
  ) as IJanela;

  BotaoSetEvent(botao: IBotoes) {
    if (botao.tipoBotao == TipoBotao.apoioJanela) this.BotoesJanela(botao);
    if (botao.tipoBotao == TipoBotao.crud) this.BotoesCrud(botao);
  }
  BotoesJanela(botao: IBotoes) {
    switch (
      this.Janela.buttons.find(
        (b) => b.tipoBotao == TipoBotao.apoioJanela && b.name == botao.name
      )?.evento
    ) {
      case "new":
        this.LimparJanela();
        break;
      case "cancel":
        this.LimparJanela();
        break;
    }
  }
  BotoesCrud(botao: IBotoes) {
    return this.Janela.buttons.find(
      (b) => b.tipoBotao == TipoBotao.crud && b.name == botao.name
    )?.evento;
  }

  LimparJanela() {}
}
