import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../styles/ContactDetails.css'

export default function ContactDetails() {
    const id = useParams().id
    const [contact, setContact] = useState(null)
    const navigate = useNavigate()

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

    const handleDelete = () => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate('/'))
    }

    return (
        <div className="infoContainer">
            <h1 className="title">Contact Details</h1>
            <h2 className="name">Name: {contact.firstName} {contact.lastName}</h2>
            <p className="street">Street: {contact.street}</p>
            <p className="city">City: {contact.city}</p>
            <button className="updateButton" onClick={() => navigate(`/update/${id}`)}>Update</button>
            <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </div>
    )
}