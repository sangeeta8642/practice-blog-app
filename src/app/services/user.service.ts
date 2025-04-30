import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { USER_ENDPOINT } from "../utils/constants";
import { userInterface } from "../utils/type.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(
        private http: HttpClient
    ) { }


    // MAKING HTTP REQUESTS
    getUsers(): Observable<userInterface[]> {
        return this.http.get<userInterface[]>(USER_ENDPOINT)
    }

}