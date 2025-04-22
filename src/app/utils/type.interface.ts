export interface userInterface {
    id: string,
    name: string,
    email: string,
    password?: string,
    role: string,
    posts: [],
    createdAt: string,
    favorites: [],
}

export interface postInterface {
    id: number,
    title: string,
    image: string,
    desc: string,
    admin: number,
    createdAt: string,
    tags: string[],
    categories: string[]
}