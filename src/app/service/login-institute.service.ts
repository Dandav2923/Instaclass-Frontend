import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginInstituteService {

  constructor(private http: HttpClient) { }


  logInstitute(login:Login) {
    return this.http.post("http://localhost:9191/institute/v1/institutes/loginInstitute",login)
  }
}
