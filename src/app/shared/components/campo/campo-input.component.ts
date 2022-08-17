import { Component, Input, OnInit } from "@angular/core";
import { ICampo } from "src/app/janela/janela";

@Component({
  selector: "campo-innput",
  templateUrl: "./campo-input.component.html",
  styleUrls: ["./campo-input.component.css"],
})
export class CampoInputComponent {
  constructor() {}

  @Input() Campos!: ICampo[];
}
