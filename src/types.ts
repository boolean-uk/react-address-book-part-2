
export interface Contact {
    firstName: string,
    lastName: string,
    gender?: string,
    email?: string,
    jobtitle?: string,
    street: string,
    city: string,
    latitude?: number,
    longitude?: number,
    favouriteColour?: string,
    profileImage?: string,
    id: number,
}

export interface PostContact {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
}