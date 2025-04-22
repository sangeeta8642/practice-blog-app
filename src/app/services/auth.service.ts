import { Injectable } from "@angular/core";
import { userInterface } from "../utils/type.interface";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: userInterface | undefined
    private userSubject = new BehaviorSubject<userInterface | null>(null)
    user$ = this.userSubject.asObservable()
    // userData 

    constructor(
        // private router:Router

    ) {
        const user = localStorage.getItem("user")
        // this.user = user ? JSON.parse(user) : null
        this.userData = user ? JSON.parse(user) : null
        if (user) {
            this.userSubject.next(JSON.parse(user));
        }
    }

    setUser(user: userInterface) {
        this.userSubject.next(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    clearUser() {
        this.userSubject.next(null);
        localStorage.removeItem('user')
    }

    getUser() {
        return this.userSubject.value
    }

    async isAuthenticate() {
        const data = await firstValueFrom(this.userSubject)
        console.log("checking the auth", data);

        if (data) {
            return true
        } else {
            return false
        }
    }

    async isAdmin() {
        const data = await firstValueFrom(this.userSubject)

        if (data?.role === "admin" && await this.isAuthenticate()) {
            return true
        } else {
            return false
        }


        // console.log("user data", data);

    }
}