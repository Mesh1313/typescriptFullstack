import {Component, OnInit} from "angular2/core";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'app-dasboard',
    templateUrl: 'app/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent implements OnInit {
    users:User[] = [];
    user:User = <User>{};

    submitted:boolean = false;

    constructor(
        private _userService: UserService
    ) {}

    ngOnInit() {
        this.getUsers();
    }
    
    getUsers() {
        this._userService.getUsers((users) => {
            this.users = users;
        });    
    }

    onSubmit(form) {
        this.submitted = true;
        
        if(!form.valid) {
            return;
        }

        this._userService.addUser(this.user, (res) => {
            this.user = <User>{};
            this.getUsers();
            this.submitted = false;
        });
    }
    
    removeUser(user) {
        this._userService.removeUser(user._id, res => {
            this.users.forEach((value, index) => {
                if (value._id == user._id) {
                    this.users.splice(index, 1);

                    if (this.user._id == user.id) {
                        this.user = <User>{};
                    }
                }
            })
        });
    }
}