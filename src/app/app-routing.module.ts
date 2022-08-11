import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AppLoginComponent } from './pages/login/app-login.component';
import { MenuComponent } from './core/component/menu/menu.component';
import {JanelaCrudComponent } from './janela/janela-crud/janela-crud.component';

const routes: Routes = [ 
  {path:'login', component: AppLoginComponent},
  {path:'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {path:'janela', component: JanelaCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
