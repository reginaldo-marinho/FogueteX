import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiCrudService {
  public JsonParemeter!: JSON;
  public Url!: string;

  constructor(private http: HttpClient) {}

  Save(): Observable<any> {
    return this.http.post<JSON>(this.Url, this.JsonParemeter).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
