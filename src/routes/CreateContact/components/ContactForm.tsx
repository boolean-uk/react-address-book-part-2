import { useNavigate } from 'react-router-dom'
import { API_URL, ContactFormProps } from '../../../model'
import LabelInput from './LabelInput'
import { useState } from 'react'

export default function ContactForm({ contacts }: ContactFormProps) {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const navigate = useNavigate()

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()
        const newId: number = contacts.length + 1
        const postContact = await fetch(API_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: newId,
                firstName: firstName,
                lastName: lastName,
                street: street,
                city: city,
            }),
        })

        const postContent = await postContact.json()
        console.log(postContent)
        navigate('/')
        window.location.reload()
    }

    return (
        <form onSubmit={handleForm} className='contact-form'>
            <LabelInput
                name='firstName'
                label='First Name '
                type='text'
                value={firstName}
                onChange={setFirstName}
            />
            <LabelInput
                name='lastName'
                label='Last Name '
                type='text'
                value={lastName}
                onChange={setLastName}
            />
            <LabelInput
                name='street'
                label='Street '
                type='text'
                value={street}
                onChange={setStreet}
            />
            <LabelInput
                name='city'
                label='City '
                type='text'
                value={city}
                onChange={setCity}
            />
            <input type='submit' className='submit-button' />
        </form>
    )
}
