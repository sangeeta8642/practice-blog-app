import { userInterface } from "src/app/utils/type.interface"

export interface UserStateModel {
    user: userInterface | null,
    users: userInterface[],
    favorites: (number | undefined)[]
}

// Store (NgRx Store)
// the store for the user and their favorite articles

export const initialUserState: UserStateModel = {
    user: null,
    users: [],
    favorites: []
}