System.register(["angular2/core", "../services/user.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, user_service_1, router_1;
    var UserEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserEditComponent = (function () {
                function UserEditComponent(_userService, _routeParams, _router) {
                    this._userService = _userService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.user = {};
                    this.submitted = false;
                }
                UserEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._userService.getUser(id, function (user) {
                        _this.user = user;
                    });
                };
                UserEditComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.submitted = true;
                    if (!form.valid) {
                        return;
                    }
                    this._userService.addUser(this.user, function (res) {
                        _this.user = {};
                        _this.submitted = false;
                        _this._router.navigate(['Dashboard']);
                    });
                };
                UserEditComponent = __decorate([
                    core_1.Component({
                        selector: 'app-user-edit',
                        templateUrl: 'app/userEdit/user-edit.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.RouteParams, router_1.Router])
                ], UserEditComponent);
                return UserEditComponent;
            }());
            exports_1("UserEditComponent", UserEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJFZGl0L3VzZXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSwyQkFDWSxZQUF3QixFQUN4QixZQUF3QixFQUN4QixPQUFjO29CQUZkLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFOMUIsU0FBSSxHQUFlLEVBQUUsQ0FBQztvQkFDdEIsY0FBUyxHQUFXLEtBQUssQ0FBQztnQkFNdkIsQ0FBQztnQkFFSixvQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFJO3dCQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFBYixpQkFhQztvQkFaRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFFdEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDYixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRzt3QkFDckMsS0FBSSxDQUFDLElBQUksR0FBUyxFQUFFLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUV2QixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7cUJBQzdDLENBQUM7O3FDQUFBO2dCQWtDRix3QkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsaURBZ0NDLENBQUEiLCJmaWxlIjoidXNlckVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXVzZXItZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdXNlckVkaXQvdXNlci1lZGl0Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlckVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXIgPSA8VXNlcj57fTtcbiAgICBzdWJtaXR0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczpSb3V0ZVBhcmFtcyxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOlJvdXRlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcihpZCwgKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TdWJtaXQoZm9ybSkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIWZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmFkZFVzZXIodGhpcy51c2VyLCAocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSA8VXNlcj57fTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0Rhc2hib2FyZCddKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
