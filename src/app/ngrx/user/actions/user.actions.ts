import { createAction, props } from "@ngrx/store";
import { userInterface } from "src/app/utils/type.interface";

export const LOAD_USERS = '[users] load users'

export const getAllUsers = createAction(LOAD_USERS)
export const getAllUsersSuccess = createAction('[users] load users success', props<{ users: userInterface[] }>())
export const loginUser = createAction('[users] login user', props<{ user: userInterface | null }>())
export const setUser = createAction('[users] set user')
export const getUser = createAction('[users] get user')
export const clearUser = createAction('[users] remove user')

export const addToFavorites = createAction('[users] article added to favorites', props<{ id: number | undefined }>())
export const fetchFavorites = createAction('[users] favorite articles')
export const removeFromFavorites = createAction('[users] article removed from favorites', props<{ id: number | undefined }>())