import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppStateModel } from "src/app/app.reducer";
import { UserService } from "src/app/services/user.service";
import { getAllUsersSuccess, LOAD_USERS } from "../actions/user.actions";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { userInterface } from "src/app/utils/type.interface";

@Injectable()
export class UserEffect {

    constructor(private actions$: Actions, private userService: UserService) { }

    fetchUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LOAD_USERS), exhaustMap((action: userInterface[]) => {
                return this.userService.getUsers().pipe(
                    map((data) => {
                        return getAllUsersSuccess({ users: data })
                    }), catchError(() => EMPTY)
                )
            })
        )
    })

}