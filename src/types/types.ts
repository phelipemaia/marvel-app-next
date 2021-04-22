export type Character = {
    id: number
    name: string
    description: string
    thumbnail: Thumbnail
}

export type Thumbnail = {
    path: string
    extension: string
}