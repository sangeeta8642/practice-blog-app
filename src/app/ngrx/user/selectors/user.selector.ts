import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserStateModel } from "../states/user.state";

// Store (NgRx Store)
//these are the selectors to fetch the data related to the user from the user store
export const getUserState = createFeatureSelector<UserStateModel>('user')

export const getUsers = createSelector(getUserState, (state) => state.users)
export const getUser = createSelector(getUserState, (state) => state.user)

export const getUserFavorites = createSelector(getUserState, (state) => state.favorites)