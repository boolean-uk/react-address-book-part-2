import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm"

function AddContact(){
    const defaultContact = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        jobTitle: '',
        street: '',
        city: '',
        profileImage: '',
        latitude: 0,
        longitude: 0
    }

    const [contact, setContact] = useState(defaultContact)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {   
        e.preventDefault()
        await addToContacts()
        navigate('/')
    }

    const addToContacts = async () => {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(contact)
        }
        await fetch("https://boolean-api-server.fly.dev/uerbzr/contact", reqOptions)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'latitude' || name === 'longitude'){
            setContact(prev => ({...prev, [name]: parseInt(value)}))
        } else {
            setContact(prev => ({...prev, [name]: value}))
        }
    }
    return ( 
        <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} contact={contact} />
    )
}

export default AddContact