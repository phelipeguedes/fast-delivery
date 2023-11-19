import { API_FAST } from 'app/app.api';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {

    /* última url visitada, é utilizada para quando entrar e sair da aplicação */
    this.router.events.filter(event => event instanceof NavigationEnd)
                      .subscribe((event: NavigationEnd) => this.lastUrl = event.url);
  }

  login(email: string, password: string):Observable<any> {
        return this.http.post<any>(`${API_FAST}/login`, {
              email: email,
              password: password
        })
        .do(user => this.user = user); // usuário logado
  }

  // usuário logado
  getLoggedUser(): User {
    if(!this.user) {
      return undefined
    }

    return this.user;
  }

  // após o login, retorna p/ a última página visitada
  afterLogin(param: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(param)]);
  }

  logout() {
    this.user = undefined;
    this.afterLogin();
  }
}
