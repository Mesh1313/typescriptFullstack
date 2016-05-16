import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserEditComponent} from "./userEdit/user-edit.component";

@Component({
    selector: 'my-app',
    template: `
        <app-header></app-header>
        <main>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </main>
        <app-footer></app-footer>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/user/edit/:id',
        name: 'UserEdit',
        component: UserEditComponent
    }
])

export class AppComponent {

}