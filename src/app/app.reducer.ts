// import { fvrtsReducer } from "./ngrx/user/redurcers/favorites.reducer";
import { userReducer } from "./ngrx/user/redurcers/user.reducer";
import { UserStateModel } from "./ngrx/user/states/user.state";

export interface AppStateModel {
    users: UserStateModel
    // favorites: UserStateModel
}

export const appReducer = {
    user: userReducer,
    // favorites: fvrtsReducer
}


