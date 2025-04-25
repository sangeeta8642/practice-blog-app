import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserStateModel } from "../states/user.state";


export const getUserState = createFeatureSelector<UserStateModel>('user')

export const getUsers = createSelector(getUserState, (state) => state.users)
export const getUser = createSelector(getUserState, (state) => state.user)

export const getUserFavorites = createSelector(getUserState, (state) => state.favorites)