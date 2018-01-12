import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError} from '@angular/router';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.html'
})
export class SpinnerComponent implements OnInit {

    public isRouteLoading: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: Event) => {
            this.isNavigationInProcess(event);
        });
    }

    isNavigationInProcess(event: Event): void {
        if (event instanceof NavigationStart) {
            this.isRouteLoading = true;
        } else if (event instanceof NavigationCancel ||
            event instanceof NavigationError ||
            event instanceof NavigationEnd) {
            this.isRouteLoading = false;
        }
    }
}