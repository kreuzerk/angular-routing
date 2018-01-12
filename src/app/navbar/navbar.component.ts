import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../messages/message.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent {

    pageTitle = 'Acme Product Management';

    constructor(private authService: AuthService, private router: Router, public messageService: MessageService) {
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }

    public showMessages(): void {
        this.messageService.showMessages();
        this.router.navigate([{outlets: {popup: ['messages']}}]);
    }

    public hideMessages(): void {
        this.messageService.hideMessages();
        this.router.navigate([{outlets: {popup: null}}]);
    }
}