// import { fvrtsReducer } from "./ngrx/user/redurcers/favorites.reducer";
import { postReducer } from "./ngrx/posts/reducers/posts.reducers";
import { PostStateModel } from "./ngrx/posts/state/posts.state";
import { userReducer } from "./ngrx/user/redurcers/user.reducer";
import { UserStateModel } from "./ngrx/user/states/user.state";

export interface AppStateModel {
    users: UserStateModel
    posts:PostStateModel
    // favorites: UserStateModel
}

export const appReducer = {
    user: userReducer,
    posts:postReducer
    // favorites: fvrtsReducer
}


