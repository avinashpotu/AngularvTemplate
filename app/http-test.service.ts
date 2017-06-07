///<reference path="../node_modules/rxjs/src/add/operator/map.ts"/>
/**
 * Created by Avinash on 07-06-2017.
 */
import { Component } from '@angular/core';
import {Injectable} from "../node_modules/@angular/core/src/di/metadata";
import {Http} from "../node_modules/@angular/http/src/http";
import {Message} from "./Message";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
@Injectable()
export class HTTPTestservcie{
    posts_Url: string = 'https://bunkerdev.azure-api.net/codetest/api/people/add';
    constructor (private _http : Http){}
    postComment(message:Message) {
        return this._http.post(this.posts_Url, message, {
            })
            .map(res =>res.json());
    }
}