export interface ILink {
    _id: string,
    originalUrl: string,
    shortUrl: string
}

export interface ILinkWithoutId {
    originalUrl: string,
    shortUrl: string
}

