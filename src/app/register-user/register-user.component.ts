import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mt-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private formBuider: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.listeningFormRegister();
  }

  listeningFormRegister() {
    this.formRegister = this.formBuider.group({
      nome_completo: this.formBuider.control(''),
      email: this.formBuider.control(''),
      password: this.formBuider.control(''),
      password_confirm: this.formBuider.control('')
    });
  }

  addUser() {
    this.userService.saveNewUser(this.formRegister.value);
  }
}
