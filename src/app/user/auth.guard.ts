import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(private authService: AuthService, private router: Router) {
    }

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