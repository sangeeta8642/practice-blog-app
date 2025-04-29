import { createAction, props } from "@ngrx/store"
import { postInterface } from "src/app/utils/type.interface"

export const ADD_POST = '[posts] add posts'
export const ADD_POST_SUCCESS = '[posts] add posts success'
export const LOAD_POSTS = '[posts] load posts'
export const LOAD_POSTS_SUCCESS = '[posts] load posts success'

export const getAllPosts = createAction(LOAD_POSTS)
export const getAllPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ posts: postInterface[] }>())
export const addPost = createAction(ADD_POST)
export const addPostSuccess = createAction(ADD_POST_SUCCESS)