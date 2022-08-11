import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './pages/login/app-login.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputDirective } from './core/directive/input-consist.directive';
import { ButtonQuadroDiretive } from './core/directive/button-consist.directive';
import { BotoesCrudComponent } from './shared/components/botoes-crud/botoes-crud.component';
import { JanelaCrudComponent } from './janela/janela-crud/janela-crud.component';
import { CampoInputComponent } from './shared/components/campo/campo-input.component';
import { LeftListComponent } from './shared/components/left-list/left-list.component';
import { QuadroComponent } from './shared/components/quadro/quadro.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    MenuComponent,
    NavBarComponent,
    JanelaCrudComponent,
    InputDirective,
    ButtonQuadroDiretive,
    CampoInputComponent,
    BotoesCrudComponent,
    LeftListComponent,
    QuadroComponent

  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: []
})
export class AppModule { }
