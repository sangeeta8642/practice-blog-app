import { userInterface } from "src/app/utils/type.interface"

export interface UserStateModel {
    user: userInterface | null,
    users: userInterface[],
    favorites: (number | undefined)[]
}

export const initialUserState: UserStateModel = {
    user: null,
    users: [],
    favorites: []
}