///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, ConnectionBackend} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./app.component";
import {UserService} from "./services/user.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, ConnectionBackend, HTTP_PROVIDERS, UserService]);