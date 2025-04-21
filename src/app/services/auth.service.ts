import { Injectable } from "@angular/core";
import { userInterface } from "../utils/type.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: userInterface | undefined
    private userSubject = new BehaviorSubject<userInterface | null>(null)
    user$ = this.userSubject.asObservable()
    // userData 

    constructor() {
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

    isAuthenticate() {
        if (this.userData) {
            return true
        } else {
            return false
        }
    }

    isAdmin() {

        this.userSubject.subscribe((data) => {
            if (this.isAuthenticate() && data?.role === "admin") {
                console.log("role", data?.role);

                return true
            } else {
                return false
            }
        })

    }
}