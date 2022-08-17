import { Component, Input } from "@angular/core";

@Component({
  selector: "janela-left-list",
  templateUrl: "./left-list.component.html",
  styleUrls: ["./left-list.component.css"],
})
export class LeftListComponent {
  constructor() {}

  @Input() List: any;
}
