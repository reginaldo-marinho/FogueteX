import { Injectable, OnInit } from "@angular/core";
import { TipoBotao, IJanela, IBotoes, IQuadro } from "src/app/janela/janela";
import { default as JanelaJSON } from "src/app/janela/Janela.json";
import { default as quadroJSON } from "src/app/janela/quadro.json";

@Injectable({
  providedIn: "root",
})
export class JanelaService implements OnInit {
  private EstadoBotoes: boolean[] = [false, true, true, true, true];

  constructor() {
    this.Janela = JSON.parse(JSON.stringify(JanelaJSON.janela)) as IJanela;
    this.Janela.quadro = JSON.parse(JSON.stringify(quadroJSON)) as IQuadro[];
  }

  public Janela!: IJanela;
  ngOnInit() {}
  /* It's a function that initializes the buttons and sets the click event for each button. */
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
  /**
   * If the button is a window support button, call the window support button function, if it's a CRUD
   * button, call the CRUD button function
   * @param {IBotoes} botao - IBotoes - This is the button that was clicked.
   */
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
        this.EstadoBotoes = [false, true, true, true, true];
        break;
      case etapaEstadoBotoes.new:
        this.EstadoBotoes = [true, false, true, true, false];
        break;
      case etapaEstadoBotoes.cancel:
        this.EstadoBotoes = [false, true, true, true, true];
        break;
    }
    this.OrganizarEstadoBotoes();
  }
  /* It's a function that organizes the state of the buttons. */
  private OrganizarEstadoBotoes() {
    (
      document.getElementById(
        "6daae3d9-adeb-45d7-ba48-36da571ba1ce"
      ) as HTMLButtonElement
    ).disabled = this.EstadoBotoes[0];
    (
      document.getElementById(
        "0323fa55-6189-4d46-a2f8-6409a5f5daf9"
      ) as HTMLButtonElement
    ).disabled = this.EstadoBotoes[1];
    (
      document.getElementById(
        "e536646b-05f7-479a-8e38-64d66a228c31"
      ) as HTMLButtonElement
    ).disabled = this.EstadoBotoes[2];
    (
      document.getElementById(
        "b5b7738f-4151-4dc9-99d5-8975003c9841"
      ) as HTMLButtonElement
    ).disabled = this.EstadoBotoes[3];
    (
      document.getElementById(
        "1e6da096-8ce4-4ed1-8559-ae416ebbe783"
      ) as HTMLButtonElement
    ).disabled = this.EstadoBotoes[4];
  }
}
enum etapaEstadoBotoes {
  load = "load",
  new = "new",
  cancel = "cancel",
}
