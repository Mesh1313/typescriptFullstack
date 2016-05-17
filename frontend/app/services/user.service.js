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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBUUksT0FBTzs7Ozs7Ozs7Ozs7O1lBRFgsZ0JBQWdCO1lBQ1osT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7WUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUduRDtnQkFDSSxxQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUFHLENBQUM7Z0JBRWxDLDZCQUFPLEdBQVAsVUFBUSxFQUFTLEVBQUUsUUFBNEI7b0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7eUJBQzdCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQzVDLENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBUSxHQUFSLFVBQVMsUUFBOEI7b0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzt5QkFDdkIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsU0FBUyxDQUNOLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFDcEIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FDNUMsQ0FBQztnQkFDVixDQUFDO2dCQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUUsUUFBNkI7b0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsU0FBQSxPQUFPLEVBQUMsQ0FBQzt5QkFDekQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsU0FBUyxDQUNOLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFDcEIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FDNUMsQ0FBQztnQkFDVixDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxFQUFTLEVBQUUsUUFBNkI7b0JBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7eUJBQ2hDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQzVDLENBQUM7Z0JBQ1YsQ0FBQztnQkF0Q0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBdUNiLGtCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCxxQ0FzQ0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuLy9oZWFkZXJzIHNldCB1cFxudmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fVxuXG4gICAgZ2V0VXNlcihpZDpzdHJpbmcsIGNhbGxiYWNrOih1c2VyOlVzZXIpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5faHR0cC5nZXQoJy9hcGkvdXNlcnMvJyArIGlkKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGNhbGxiYWNrKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoY2FsbGJhY2s6KHVzZXI6VXNlcltdKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX2h0dHAuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiBjYWxsYmFjayhyZXMpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZFVzZXIodXNlcjpVc2VyLCBjYWxsYmFjazoodXNlcjogVXNlcikgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9odHRwLnBvc3QoJy9hcGkvdXNlcnMnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGNhbGxiYWNrKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVXNlcihpZDpzdHJpbmcsIGNhbGxiYWNrOihyZXN1bHQ6YW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX2h0dHAuZGVsZXRlKCcvYXBpL3VzZXJzLycgKyBpZClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiBjYWxsYmFjayhyZXMpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
