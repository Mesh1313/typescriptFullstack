import {Injectable, OnInit} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {User} from "../models/user.model";

//headers set up
var headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class UserService {
    constructor(private _http:Http) {}

    getUser(id:string, callback:(user:User) => void) {

        this._http.get('/api/users/' + id)
            .map(res => res.json())
            .subscribe(
                res => callback(res),
                error => console.error('Error: ' + error)
            );
    }

    getUsers(callback:(user:User[]) => void) {
        this._http.get('/api/users')
            .map(res => res.json())
            .subscribe(
                res => callback(res),
                error => console.error('Error: ' + error)
            );
    }

    addUser(user:User, callback:(user: User) => void) {
        this._http.post('/api/users', JSON.stringify(user), {headers})
            .map(res => res.json())
            .subscribe(
                res => callback(res),
                error => console.error('Error: ' + error)
            );
    }

    removeUser(id:string, callback:(result:any) => void) {
        this._http.delete('/api/users/' + id)
            .map(res => res.json())
            .subscribe(
                res => callback(res),
                error => console.error('Error: ' + error)
            );
    }
}