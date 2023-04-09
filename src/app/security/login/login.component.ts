import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { SnackbarComponent } from './../../shared/snackbar/snackbar.component';
import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  routeToNavigate: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private messageService: MessageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.listeningToForm();

    this.routeToNavigate = this.activatedRoute.snapshot.params['url'] || btoa('/');
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

      this.loginService.login(username, password).subscribe(user => {
        console.log(user);
        
        this.messageService.showMessage('Usuário(a)logado com sucesso!!!');
        this.router.navigate([atob(this.routeToNavigate)]);
      },
      (err) => {
        console.log(err);

        let { error } = err;
        let errorMessage = error.errorMessage;

        this.messageService.showMessage(errorMessage);
      });
  }

}
