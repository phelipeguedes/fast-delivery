import { API_MEAT } from 'app/app.api';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.user;
  }

  login(username, password):Observable<User>{
          return this.http.post<User>(`${API_MEAT}/login`, {
              username: username, password: password
          })
            .do(user => this.user = user); // usuário logado
  }
}
