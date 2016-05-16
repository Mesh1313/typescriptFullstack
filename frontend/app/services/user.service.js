System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var headers, UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            //headers set up
            headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                }
                UserService.prototype.getUser = function (id, callback) {
                    this._http.get('/api/users/' + id)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return callback(res); }, function (error) { return console.error('Error: ' + error); });
                };
                UserService.prototype.getUsers = function (callback) {
                    this._http.get('/api/users')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return callback(res); }, function (error) { return console.error('Error: ' + error); });
                };
                UserService.prototype.addUser = function (user, callback) {
                    this._http.post('/api/users', JSON.stringify(user), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return callback(res); }, function (error) { return console.error('Error: ' + error); });
                };
                UserService.prototype.removeUser = function (id, callback) {
                    this._http.delete('/api/users/' + id)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return callback(res); }, function (error) { return console.error('Error: ' + error); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBUUksT0FBTzs7Ozs7Ozs7Ozs7O1lBRFgsZ0JBQWdCO1lBQ1osT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7WUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUduRDtnQkFDSSxxQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUFHLENBQUM7Z0JBRWxDLDZCQUFPLEdBQVAsVUFBUSxFQUFTLEVBQUUsUUFBNEI7b0JBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7eUJBQzdCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQzVDLENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBUSxHQUFSLFVBQVMsUUFBOEI7b0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzt5QkFDdkIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsU0FBUyxDQUNOLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFDcEIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FDNUMsQ0FBQztnQkFDVixDQUFDO2dCQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUUsUUFBNkI7b0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsU0FBQSxPQUFPLEVBQUMsQ0FBQzt5QkFDekQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsU0FBUyxDQUNOLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFDcEIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FDNUMsQ0FBQztnQkFDVixDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxFQUFTLEVBQUUsUUFBNkI7b0JBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7eUJBQ2hDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQzVDLENBQUM7Z0JBQ1YsQ0FBQztnQkF2Q0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBd0NiLGtCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCxxQ0F1Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuLy9oZWFkZXJzIHNldCB1cFxudmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fVxuXG4gICAgZ2V0VXNlcihpZDpzdHJpbmcsIGNhbGxiYWNrOih1c2VyOlVzZXIpID0+IHZvaWQpIHtcblxuICAgICAgICB0aGlzLl9odHRwLmdldCgnL2FwaS91c2Vycy8nICsgaWQpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4gY2FsbGJhY2socmVzKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRVc2VycyhjYWxsYmFjazoodXNlcjpVc2VyW10pID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5faHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGNhbGxiYWNrKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkVXNlcih1c2VyOlVzZXIsIGNhbGxiYWNrOih1c2VyOiBVc2VyKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX2h0dHAucG9zdCgnL2FwaS91c2VycycsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7aGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4gY2FsbGJhY2socmVzKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVVc2VyKGlkOnN0cmluZywgY2FsbGJhY2s6KHJlc3VsdDphbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5faHR0cC5kZWxldGUoJy9hcGkvdXNlcnMvJyArIGlkKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGNhbGxiYWNrKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
