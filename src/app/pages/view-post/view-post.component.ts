import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateModel } from "src/app/app.reducer";
import { getAllUsers } from "src/app/ngrx/user/actions/user.actions";
import { getUsers } from "src/app/ngrx/user/selectors/user.selector";
import { postInterface, userInterface } from "src/app/utils/type.interface";

@Component({
    selector: "app-view-post",
    templateUrl: "./view-post.component.html",
    styleUrls: ['./view-post.component.css']
})

export class ViewPostComponent implements OnInit {
    post: postInterface
    users: userInterface[] = []

    // DIRECTIVES AND LIFE CYCLE
    constructor(
        private router: Router,
        private store: Store<AppStateModel>
    ) {

        console.log("post details", this.router.getCurrentNavigation()?.extras.state);
        this.post = this.router.getCurrentNavigation()?.extras.state as postInterface
        if (!this.post) {
            this.router.navigateByUrl('/')
        }
    }


    // DIRECTIVES AND LIFE CYCLE
    ngOnInit() {
        // Store (NgRx Store)
        this.store.dispatch(getAllUsers())
        this.store.select(getUsers).subscribe((data) => {
            this.users = data

            console.log("users", this.users);

        })
    }
}