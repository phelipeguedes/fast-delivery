import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { API_FAST } from 'app/app.api';
import { Role } from 'app/models/role.model';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  saveUser(user: User) {
    return this.http.post<any>(`${API_FAST}/new-user`, user);
  }

  listAllUsers(): User[] {
    return [];
  }

  updateUser(user: User) {

  }

  deleteUser(idUser: number) {

  }

  getUserById(idUser: number) {

  }

  getOrdersUserById(idUser: number) {

  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${API_FAST}/roles`);
  }
}
