import { AfterContentInit, Component } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements AfterContentInit {
  ngAfterContentInit() {
    document.getElementById("card-user")?.addEventListener("click", (e) => {
      this.OpenUserprofile();
    });
  }

  OpenUserprofile() {
    let profile = document.getElementById("card-user-profile");
    if (profile!.classList.contains("display-none")) {
      profile!.classList.replace("display-none", "display-block");
    } else {
      if (profile!.classList.contains("display-block")) {
        profile!.classList.replace("display-block", "display-none");
      }
    }
  }
}
