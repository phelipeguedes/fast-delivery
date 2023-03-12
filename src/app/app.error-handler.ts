import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        
        let msgError: string;

        if(error instanceof HttpErrorResponse) {
            let body = error.error
            msgError = `Erro ${error.status}. A URL ${error.url} não foi encontrada no servidor.`
            console.log(msgError)
        } else {
            msgError = error.toString();
            alert(msgError)
        }

        console.log(msgError);
        return throwError(msgError);
    }
}