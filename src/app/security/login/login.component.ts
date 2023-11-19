import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { SnackbarComponent } from '../../components/shared/snackbar/snackbar.component';
import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  routeToNavigate: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private messageService: MessageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initToForm();
    this.routeToNavigate = this.activatedRoute.snapshot.params['url'] || btoa('/');
  }

  initToForm() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  login(email: string, password: string) {

      email = this.formLogin.value.email,
      password = this.formLogin.value.password,

      this.loginService.login(email, password).subscribe(response => {
        console.log(response);

        this.messageService.showMessage(response.message);
        this.router.navigate([atob(this.routeToNavigate)]);
      },
      (err) => {
        console.log(err);

        let errorMessage = err.error.message
        this.messageService.showMessage(errorMessage);
      });
  }

}
