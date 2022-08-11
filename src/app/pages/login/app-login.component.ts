import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  constructor(private fb: FormBuilder, private loginService:LoginService, private router: Router) { }
  
  UsuarioLogin!:Login;

  Formlogin = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });

  @HostListener('click', ['$event'])
  Login(e:any){
    if (this.Formlogin.valid || e.target.id == "btn-entrar" && this.Formlogin.status == "VALID"){
      this.UsuarioLogin = {
         username: String(this.Formlogin.controls["username"].value),
         password: String(this.Formlogin.controls["password"].value)
      }

      this.loginService.Autenticar(this.UsuarioLogin!)
       .subscribe((data) =>{
       this.goToMenu(),
        this.UsuarioLogin = {
         username : data.username,
         password:  data.password
        }
      });
    }
  }
  private goToMenu() {
    this.router.navigate(['menu']);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

}
