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
    var DashboardComponent;
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
            DashboardComponent = (function () {
                function DashboardComponent(_userService) {
                    this._userService = _userService;
                    this.user = {};
                    this.submitted = false;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                DashboardComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers(function (users) {
                        _this.users = users;
                    });
                };
                DashboardComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.submitted = true;
                    if (!form.valid) {
                        return;
                    }
                    this._userService.addUser(this.user, function (res) {
                        _this.user = {};
                        _this.getUsers();
                        _this.submitted = false;
                    });
                };
                DashboardComponent.prototype.removeUser = function (user) {
                    var _this = this;
                    this._userService.removeUser(user._id, function (res) {
                        _this.users.forEach(function (value, index) {
                            if (value._id == user._id) {
                                _this.users.splice(index, 1);
                                if (_this.user._id == user.id) {
                                    _this.user = {};
                                }
                            }
                        });
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'app-dasboard',
                        templateUrl: 'app/dashboard/dashboard.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksNEJBQ1ksWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUxyQyxTQUFJLEdBQWMsRUFBRSxDQUFDO29CQUVyQixjQUFTLEdBQVcsS0FBSyxDQUFDO2dCQUl2QixDQUFDO2dCQUVKLHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBSUM7b0JBSEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBQyxLQUFLO3dCQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFBYixpQkFZQztvQkFYRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFFdEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDYixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRzt3QkFDckMsS0FBSSxDQUFDLElBQUksR0FBUyxFQUFFLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsdUNBQVUsR0FBVixVQUFXLElBQUk7b0JBQWYsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFBLEdBQUc7d0JBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FFNUIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQzNCLEtBQUksQ0FBQyxJQUFJLEdBQVMsRUFBRSxDQUFDO2dDQUN6QixDQUFDOzRCQUNMLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFwREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O3NDQUFBO2dCQWlERix5QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsbURBK0NDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1kYXNib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyczpVc2VyW107XG4gICAgdXNlcjpVc2VyID0gPFVzZXI+e307XG5cbiAgICBzdWJtaXR0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XG4gICAgfVxuICAgIFxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VycygodXNlcnMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cblxuICAgIG9uU3VibWl0KGZvcm0pIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYoIWZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmFkZFVzZXIodGhpcy51c2VyLCAocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSA8VXNlcj57fTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVVc2VyKHVzZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UucmVtb3ZlVXNlcih1c2VyLl9pZCwgcmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcnMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9pZCA9PSB1c2VyLl9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5faWQgPT0gdXNlci5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gPFVzZXI+e307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
