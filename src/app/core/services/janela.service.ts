import { Injectable, Renderer2 } from "@angular/core";
import { TipoBotao, IJanela, IBotoes } from "src/app/janela/janela";
import { default as JanelaJSON } from "src/app/janela/Janela.json";

@Injectable({
  providedIn: "root",
})
export class JanelaService {
  constructor(private rederer: Renderer2) {}

  EstadoButoes: boolean[] = [false, true, true, true, true];

  public Janela: IJanela = JSON.parse(
    JSON.stringify(JanelaJSON.janela)
  ) as IJanela;
  public FactoryServices() {
    this.SetEstadoBotoes("load");
    this.SetEventClickBotoes();
  }
  private SetEventClickBotoes() {
    this.Janela.buttons.forEach((b: IBotoes) => {
      document
        .getElementById(b.id)
        ?.addEventListener("click", () => this.onClickBotao(b));
    });
  }
  onClickBotao(botao: IBotoes) {
    if (botao.tipoBotao == TipoBotao.apoioJanela) this.BotoesJanela(botao);
    if (botao.tipoBotao == TipoBotao.crud) this.BotoesCrud(botao);
  }
  private BotoesJanela(botao: IBotoes) {
    let event: string = this.Janela.buttons.find(
      (b) => b.tipoBotao == TipoBotao.apoioJanela && b.name == botao.name
    )!.evento;
    switch (event) {
      case "new":
        this.SetEstadoBotoes("new");
        this.LimparJanela();
        break;
      case "cancel":
        this.SetEstadoBotoes("cancel");
        this.LimparJanela();
        break;
    }
  }
  private BotoesCrud(botao: IBotoes) {
    return this.Janela.buttons.find(
      (b) => b.tipoBotao == TipoBotao.crud && b.name == botao.name
    )?.evento;
  }
  private LimparJanela() {
    document
      .querySelectorAll(".quadro-campo .campo > input")
      .forEach((input) => ((input as HTMLInputElement).value = ""));
  }

  private SetEstadoBotoes(etapa: string) {
    switch (etapa) {
      case etapaEstadoBotoes.load:
        this.EstadoButoes = [false, true, true, true, true];
        break;
      case etapaEstadoBotoes.new:
        this.EstadoButoes = [true, false, true, true, false];
        break;
      case etapaEstadoBotoes.cancel:
        this.EstadoButoes = [false, true, true, true, true];
        break;
    }
    this.OrganizarEstadoBotoes();
  }
  private OrganizarEstadoBotoes() {
    (
      document.getElementById(
        "6daae3d9-adeb-45d7-ba48-36da571ba1ce"
      ) as HTMLButtonElement
    ).disabled = this.EstadoButoes[0];
    (
      document.getElementById(
        "0323fa55-6189-4d46-a2f8-6409a5f5daf9"
      ) as HTMLButtonElement
    ).disabled = this.EstadoButoes[1];
    (
      document.getElementById(
        "e536646b-05f7-479a-8e38-64d66a228c31"
      ) as HTMLButtonElement
    ).disabled = this.EstadoButoes[2];
    (
      document.getElementById(
        "b5b7738f-4151-4dc9-99d5-8975003c9841"
      ) as HTMLButtonElement
    ).disabled = this.EstadoButoes[3];
    (
      document.getElementById(
        "1e6da096-8ce4-4ed1-8559-ae416ebbe783"
      ) as HTMLButtonElement
    ).disabled = this.EstadoButoes[4];
  }
}
enum etapaEstadoBotoes {
  load = "load",
  new = "new",
  cancel = "cancel",
}
