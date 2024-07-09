import { SetStateAction } from 'react'

export const API_URL = 'https://boolean-uk-api-server.fly.dev/th0jensen/contact'

export type Contact = {
    id: number
    firstName: string
    lastName: string
    street: string
    city: string
    email?: string
    favouriteColor?: string
    gender?: string
    jobTitle?: string
    latitude?: number
    longitude?: number
    profileImage?: string
}

export type ContactListProps = {
    contacts: Contact[]
}

export type ContactListItemProps = {
    contact: Contact
}

export type LabelInputProps = {
    name: string
    label: string
    type: string
    onChange: React.Dispatch<SetStateAction<string>>
    value: string
}

export type DetailsProps = ContactListProps
export type DashboardProps = ContactListProps
export type CreateContactProps = ContactListProps
export type ContactFormProps = ContactListProps
export type DetailsItemProps = ContactListItemProps
