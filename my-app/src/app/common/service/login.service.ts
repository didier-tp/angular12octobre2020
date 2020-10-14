import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  public postLogin(login: Login): Observable<LoginResponse> {
    let url = "./login-api/public/auth";
    //en mode dev , cette url sera automatiquement préfixée par http://localhost:8282
    //selon les paramétrage de proxy.conf.json 
    //si démarrage via ng serve --proxy-config proxy.conf.json
   return this._http.post<LoginResponse>(
        url,
        login,
        { headers : this._headers}
   );
  }

  constructor(private _http :HttpClient) { }
}
