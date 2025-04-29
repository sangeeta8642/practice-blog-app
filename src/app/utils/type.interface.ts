export interface userInterface {
    id: number,
    name: string,
    email: string,
    password?: string,
    role: string,
    posts: [],
    createdAt: string,
    favorites: [],
}

export interface postInterface {
    id?: number,
    title: string,
    image: string,
    desc: string,
    admin: number,
    createdAt?: string | Date | number ,
    tags: string[],
    category: string[]
}