import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'mt-link-login',
  templateUrl: '../../components/link-login/link-login.component.html',
  styleUrls: ['../../components/link-login/link-login.component.css']
})
export class LinkLoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getLoggedUser();
  }

  getLoggedUser() {
    let user = this.loginService.getLoggedUser();    
    return user;
  }

  login() {
    this.loginService.afterLogin()
  }

  logout() {  
    this.loginService.logout();
  }

}
