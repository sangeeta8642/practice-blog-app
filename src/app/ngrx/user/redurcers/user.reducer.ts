import { createReducer, on, State } from "@ngrx/store";
import { initialUserState, UserStateModel } from "../states/user.state";
import { addToFavorites, clearUser, getAllUsers, getAllUsersSuccess, loginUser, removeFromFavorites } from "../actions/user.actions";

// Store (NgRx Store)
//reducers for the user actions
export const _userReducer = createReducer(initialUserState,
    on(getAllUsers, (state) => {
        return {
            ...state
        }
    }
    ), on(getAllUsersSuccess, (state, action) => {
        return {
            ...state,
            users: [...action.users]
        }
    }), on(loginUser, (state, action) => {
        console.log("state", state, "action", action);

        return {
            ...state,
            user: action.user
        }
    })
    , on(addToFavorites, (state, action) => {
        console.log("state", state, "action", action);
        if (action.id !== undefined) {
            let isAdded = state.favorites.find((x: number | undefined) => x === action.id)
            if (!isAdded) {
                let userFavorites = [...state.favorites, action.id]

                return {
                    ...state,
                    favorites: userFavorites,
                    // user.favorites:state.favorites
                    user: {
                        ...state.user,
                        favorites: userFavorites
                    }
                } as UserStateModel
            }

            else {
                alert("article already present in the favorites")
            }
            // return state
        }


        return state

    })
    , on(removeFromFavorites, (state, action) => {
        console.log("state", state, "action", action);
        if (action.id !== undefined) {
            // let isAdded = state.favorites.find((x: number | undefined) => x === action.id)
            // if (!isAdded) {
            // let userFavorites = [...state.favorites, action.id]
            let userFavorites = state.favorites.filter((x) => x !== action.id)
            console.log("userFavorites", userFavorites);


            return {
                ...state,
                favorites: userFavorites,
                // user.favorites:state.favorites
                // user: {
                //     ...state.user,
                //     favorites: userFavorites
                // }
            } as UserStateModel
            // }

            // else {
            // alert("article already present in the favorites")
            //     }
            //     // return state
        }


        return state

    }), on(clearUser, (state) => {
        return {
            ...state,
            user: null
        }
    })
)

export function userReducer(state: UserStateModel = initialUserState, action: any) {
    // return _userReducer(state, action)

    return _userReducer(state, action)
}