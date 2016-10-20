export interface NewBookmark {
    id?: number,
    name: string,
    albumId: string
}

export interface Bookmark extends NewBookmark {
    id: number
}
