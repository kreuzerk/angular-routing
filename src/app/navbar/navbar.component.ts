import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent {

    pageTitle = 'Acme Product Management';

    constructor(private authService: AuthService, private router: Router) {
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
}