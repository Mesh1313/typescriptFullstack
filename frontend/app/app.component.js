System.register(['angular2/core', 'angular2/router', "./header/header.component", "./footer/footer.component", "./dashboard/dashboard.component", "./userEdit/user-edit.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, header_component_1, footer_component_1, dashboard_component_1, user_edit_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (user_edit_component_1_1) {
                user_edit_component_1 = user_edit_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <app-header></app-header>\n        <main>\n            <div class=\"container\">\n                <router-outlet></router-outlet>\n            </div>\n        </main>\n        <app-footer></app-footer>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/user/edit/:id',
                            name: 'UserEdit',
                            component: user_edit_component_1.UserEditComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkEvQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJOQVFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLEVBQUUsa0NBQWUsQ0FBQzt3QkFDakUsU0FBUyxFQUFFLENBQUMseUJBQWdCLENBQUM7cUJBQ2hDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsR0FBRzs0QkFDVCxJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjs0QkFDN0IsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxnQkFBZ0I7NEJBQ3RCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsdUNBQWlCO3lCQUMvQjtxQkFDSixDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7VXNlckVkaXRDb21wb25lbnR9IGZyb20gXCIuL3VzZXJFZGl0L3VzZXItZWRpdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGFwcC1mb290ZXI+PC9hcHAtZm9vdGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbUk9VVEVSX1BST1ZJREVSU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdXNlci9lZGl0LzppZCcsXG4gICAgICAgIG5hbWU6ICdVc2VyRWRpdCcsXG4gICAgICAgIGNvbXBvbmVudDogVXNlckVkaXRDb21wb25lbnRcbiAgICB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
