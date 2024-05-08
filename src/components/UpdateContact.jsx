import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import { useEffect, useState } from "react";

export default function UpdateContact(props) {
    const { contacts, setContacts } = props

    const navigate = useNavigate()

    const params = useParams()

    const updateContact = contacts.find(contact => contact.id === Number(params.id))
    
    const [updateFormData, setUpdateFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        profileImage: '',
        gender: '',
        jobTitle: '',
        favouriteColour: '',
        email: '',
        latitude: '',
        longitude: ''
    })

    useEffect(() => {
        if (updateContact) {
            setUpdateFormData({
                firstName: updateContact.firstName,
                lastName: updateContact.lastName,
                street: updateContact.street,
                city: updateContact.city,
                profileImage: updateContact.profileImage,
                gender: updateContact.gender,
                jobTitle: updateContact.jobTitle,
                favouriteColour: updateContact.favouriteColour,
                email: updateContact.email,
                latitude: updateContact.latitude,
                longitude: updateContact.longitude
            })
        }
    }, [updateContact])

    const handleChange = (e) => {
        const { name , value } = e.target

        if (name === 'latitude' || name === 'longitude') {
            setUpdateFormData({
                ...updateFormData,
                [name]: parseFloat(value)
            })
        } else {
            setUpdateFormData({
                ...updateFormData,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact/${updateContact.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateFormData)
        }).then(() => {
            const updatedContacts = contacts.map(contact => {
                if (contact.id === updateContact.id) {
                    return { ...contact, ...updateFormData }
                }
                return contact
            })
            setContacts(updatedContacts)

            navigate(`/contact/${updateContact.id}`)
        })
    }
    
    return (
        <main className="update-contact">
            <h2>Update Contact</h2>

            <Form 
                formData={updateFormData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </main>
    )
}