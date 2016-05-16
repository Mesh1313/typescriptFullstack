import {Component, OnInit} from "angular2/core";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {RouteParams, Router} from "angular2/router";

@Component({
    selector: 'app-user-edit',
    templateUrl: 'app/userEdit/user-edit.html'
})

export class UserEditComponent implements OnInit {
    user: User = <User>{};
    submitted:boolean = false;

    constructor(
        private _userService:UserService,
        private _routeParams:RouteParams,
        private _router:Router
    ) {}

    ngOnInit() {
        let id = this._routeParams.get('id');

        this._userService.getUser(id, (user) => {
            this.user = user;
        })
    }

    onSubmit(form) {
        this.submitted = true;

        if(!form.valid) {
            return;
        }

        this._userService.addUser(this.user, (res) => {
            this.user = <User>{};
            this.submitted = false;

            this._router.navigate(['Dashboard']);
        });
    }
}