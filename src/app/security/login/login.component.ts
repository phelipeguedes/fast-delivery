import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.listeningToForm();
  }

  listeningToForm() {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })
  }

  login(username: string, password: string) {
      username = this.formLogin.value.username,
      password = this.formLogin.value.password,

      this.loginService.login(username, password)
          .subscribe(user => console.log(user)
      );
  }

}
