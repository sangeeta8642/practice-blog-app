import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-un-auth",
    templateUrl: './un-auth.component.html',
    styleUrls: ['./un-auth.component.css']
})

export class UnAuthComponent {
    constructor(
        private router: Router
    ) { }

    redirect(url: string) {
        this.router.navigateByUrl(`/${url}`)
    }
}