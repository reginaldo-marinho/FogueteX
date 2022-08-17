import { Directive, HostListener, Input, Renderer2 } from "@angular/core";
import { ApiCrudService } from "../services/api-crud.services";
import { JanelaService } from "../services/janela.service";
import { ModeloService } from "../services/modelo.service";

@Directive({ selector: "[buttonQuadroDiretive]" })
export class ButtonQuadroDiretive {
  constructor(
    private rederer: Renderer2,
    private crud: ApiCrudService,
    private modelo: ModeloService,
    private janela: JanelaService
  ) {}

  @Input("buttonQuadroDiretive") set state(campo: any) {
    //document.getElementById(campo.id)?.addEventListener('click',)
  }
  @HostListener("click", ["$event.currenttarget"]) Click(e: Event) {}
}
