import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';

import { MessageService } from './services/message.service'
import { LoginService } from './services/login.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler{

    constructor(private messageService: MessageService, private zone: NgZone, private loginService: LoginService) {
        super()
    }

    handleError(error: HttpErrorResponse | any) {

        let msgError: string;

        if(error instanceof HttpErrorResponse) {
            this.zone.run(() => {

                if(error.status == 401) {
                    msgError = `Erro ${error.status}. Você precisa fazer login para acessar a página solicitada.`;
                    this.loginService.afterLogin();
                }

                if(error.status == 404)
                    msgError = `Erro ${error.status}. A URL ${error.url} não foi encontrada no servidor.`;

                if(error.status == 403)
                    msgError = `Erro ${error.status}. Não há permissão para acessar a URL solicitada.`;

                this.messageService.showMessage(msgError);
            });

        } else {
            msgError = error.toString();
            this.messageService.showMessage(msgError);
        }

        super.handleError(error);

        return throwError(msgError);
    }
}
