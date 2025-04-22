import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { postInterface } from "src/app/utils/type.interface";

@Component({
    selector: "app-view-post",
    templateUrl: "./view-post.component.html",
    styleUrls: ['./view-post.component.css']
})

export class ViewPostComponent implements OnInit {
    post: postInterface
    constructor(
        private router: Router
    ) {

        console.log("post details", this.router.getCurrentNavigation()?.extras.state);
        this.post = this.router.getCurrentNavigation()?.extras.state as postInterface
        if (!this.post) {
            this.router.navigateByUrl('/')
        }
    }

    ngOnInit(): void {

    }
}