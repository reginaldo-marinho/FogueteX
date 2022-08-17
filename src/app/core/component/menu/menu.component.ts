import { Component, AfterContentInit } from "@angular/core";
import { default as menu } from "./BackgroundMenu.json";

@Component({
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements AfterContentInit {
  constructor() {}

  MenuVericalModulos = menu.root.modulo;
  MenuGrupos: any;

  ngAfterContentInit() {
    this.SetEventsInitial();
  }

  SetEventsInitial() {
    window.addEventListener("DOMContentLoaded", (event) => {
      this.MenuVericalModulos!.forEach((item) => {
        document.getElementById(item.id)?.addEventListener("click", (e) => {
          this.OpenMenuModule(e);
        });
      });
    });
  }

  OpenMenuModule(event: any) {
    this.MenuGrupos! = this.MenuVericalModulos!.find(
      (item) => item.id == event.currentTarget.id
    )?.grupoMenu;
  }

  GetStar(item: number): string {
    if (item == 0) return "bi bi-star";
    if (item == 1) return "bi bi-star-fill star-fill-color";
    else return "";
  }
}
