// AUTHENTICATION & ROUTE PROTECTION IN ANGULAR APPS
import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { CanActivateFn, Router } from "@angular/router";

export const isAdmin: CanActivateFn = async () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)
    const isUserAdmin = await authService.isAdmin()
    console.log("isUserAdmin", isUserAdmin);

    if (isUserAdmin) {
        return true
    } else {

        router.navigate(['/'])
        return false
    }
    // if(authService.isAdmin())
}
export const isAuthenticate: CanActivateFn = async () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)
    const isUserAuth = await authService.isAuthenticate()
    console.log("isUserAuth", isUserAuth);

    if (isUserAuth) {
        return true
    } else {

        router.navigate(['/un-auth'])
        return false
    }
    // if(authService.isAdmin())
}
export const Unauthenticated: CanActivateFn = async () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)
    const isUserAuth = await authService.isAuthenticate()
    console.log("isUserAuth", isUserAuth);

    if (isUserAuth) {
        router.navigate(['/'])
        return false
    } else {

        return true
    }
    // if(authService.isAdmin())
}