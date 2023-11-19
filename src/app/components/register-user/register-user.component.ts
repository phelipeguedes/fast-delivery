import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'app/models/role.model';
import { ConfirmPasswordValidator } from '../shared/validator_password';
import { MessageService } from 'app/services/message.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'mt-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];

  constructor(private formBuider: FormBuilder, private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.initForm();
    this.getRoles();
  }

  initForm() {
    this.form = this.formBuider.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      password_confirm: [null, [Validators.required]],
      role: this.formBuider.control('')
    }, {
      validator: ConfirmPasswordValidator('password', 'password_confirm')
    });
  }

  async onSubmit() {

    if(!this.form.valid) {
      return this.messageService.showMessage('Todos os campos do formulário são obrigatórios');
    }

    this.userService.saveUser(this.form.value).subscribe((response) => {
      this.messageService.showMessage(response.message);
    },
    error => {
      this.messageService.showMessage(error.message)
    });

    this.form.reset();
  }

  getRoles() {
    return this.userService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
