import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/ContactDetails.css'

export default function ContactDetails() {
    const id = useParams().id
    const [contact, setContact] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`)
            .then(response => response.json())
            .then(data => setContact(data))
    }, [id])

    if (!contact) return (
        <div className="infoContainer">
            <p>Loading...</p>
        </div>
    )
    return (
        <div className="infoContainer">
            <h1 className="title">Contact Details</h1>
            <h2 className="name">Name: {contact.firstName} {contact.lastName}</h2>
            <p className="street">Street: {contact.street}</p>
            <p className="city">City: {contact.city}</p>
        </div>
    )
}