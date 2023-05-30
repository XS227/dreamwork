import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private http: HttpClient) {}

  public sendMail(user: any): Observable<any> {
    return this.http.post<any>(`${environment.URL}/api/contact`, user);
  }
}
