import { createReducer, on } from "@ngrx/store";
import { initialPostState, PostStateModel } from "../state/posts.state";
import { getAllPosts, getAllPostsSuccess } from "../actions/posts.actiond";


export const _postsReducer = createReducer(initialPostState,
    on(getAllPosts, (state) => {
        return {
            ...state
        }
    }), on(getAllPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: [...action.posts]
        }
    })
)

export function postReducer(state: PostStateModel = initialPostState, action: any) {
    return _postsReducer(state, action)
}