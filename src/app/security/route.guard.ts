import { LoginService } from 'app/services/login.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RouteGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {}

    checkAuth(param: string): boolean {
        const loggedUser = this.loginService.getLoggedUser();

        if(loggedUser == undefined) {
            this.loginService.afterLogin(`/${param}`);
        }

        return true;
    }

    canLoad(route: Route): boolean {
        console.log(route);
        
        const isLogged = this.loginService.getLoggedUser();

        if(isLogged == undefined) {
            console.log(isLogged)
            this.loginService.afterLogin(`${route.path}`)
        }
        
        return true;
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkAuth(activatedRoute.routeConfig.path);
    }
}