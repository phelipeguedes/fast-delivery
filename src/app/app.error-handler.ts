import { Observable } from "rxjs/Observable";
import {Response} from '@angular/http';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: Response | any) {
        
        let msgError: string;

        if(error instanceof Response) {
            msgError = `Erro ${error.status}. A URL ${error.url} não foi encontrada no servidor.`
            console.log(msgError)
        } else {
            msgError = error.toString();
            alert(msgError)
        }

        console.log(msgError);
        return Observable.throw(msgError);
    }
}