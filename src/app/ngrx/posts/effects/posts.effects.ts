import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { getAllPostsSuccess, LOAD_POSTS } from "../actions/posts.actiond";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { postInterface } from "src/app/utils/type.interface";

@Injectable()
export class PostsEffect {
    constructor(private actions$: Actions, private postServices: PostsService) { }

    fetchPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LOAD_POSTS),
            exhaustMap((actions: postInterface[]) => {
                console.log("calling post effect");
                return this.postServices.getAllPosts().pipe(
                    map((data) => {
                        console.log("data in posts effect", data, actions);

                        return getAllPostsSuccess({ posts: data })
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
    })
}