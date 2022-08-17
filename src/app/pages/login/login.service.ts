import { Injectable } from "@angular/core";
import { Login } from "./login";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private url: string = "https://localhost:44394/api/Login/entrar";

  constructor(private http: HttpClient) {}

  Autenticar(login: Login): Observable<Login> {
    return this.http.post<Login>(this.url, login).pipe(
      map((result) => {
        localStorage.setItem("access_token", result.token!);
        return result;
      })
    );
  }
}
