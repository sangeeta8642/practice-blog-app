import { postInterface } from "src/app/utils/type.interface"

export interface PostStateModel {
    posts: postInterface[]
}

export const initialPostState: PostStateModel = {
    posts: []
}