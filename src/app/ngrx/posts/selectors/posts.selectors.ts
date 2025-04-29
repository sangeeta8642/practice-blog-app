import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStateModel } from "../state/posts.state";
// import { postStateModel } from "../state/posts.state";

export const getPostState = createFeatureSelector<PostStateModel>('posts')

export const getPosts = createSelector(getPostState, (state) => state.posts)