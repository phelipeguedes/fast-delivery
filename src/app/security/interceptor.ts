import { LoginService } from 'app/services/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
    
    constructor(private injector: Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let loginService = this.injector.get(LoginService);

        // usuário tá logado
        if(loginService.getLoggedUser() !== undefined) {
            
            let reqAuth = req.clone({setHeaders: {'Authorization':`Bearer ${ loginService.user.token }`}})
            
            return next.handle(reqAuth)._do(event => {
                console.log('interceptando: ', reqAuth)
                console.log('evento: ', event.type)
            });
        
        // usuário não tá logado
        } else {

            return next.handle(req);
        }
    }
    
}