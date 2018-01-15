import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedIn = !!this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.authService.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    // Attention!! Can Load blocks preloading of lazy loaded feature modules
    canLoad(route: Route): boolean {
        const isLoggedIn = !!this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.authService.redirectUrl = route.path;
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}