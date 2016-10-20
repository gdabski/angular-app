export interface Album {
    id: string,
    name: string,
    images: Image[]
}

export interface Image {
    url: string,
    height: number,
    width: number
}
