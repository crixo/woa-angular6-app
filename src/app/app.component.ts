import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './security/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

    pageTitle: string = 'WOA';
    loading: boolean = true;
    public isCollapsed = true;

    constructor(public authService: AuthService,
                private router: Router) {

        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
}
