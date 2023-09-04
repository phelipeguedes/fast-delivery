import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  saveNewUser(user: User) {
    console.log(user)
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
}
