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
            .then(data => { setContact(data); console.log(data) })
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
            <img className="avatar" src={contact.profileImage ?? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png"} alt="avatar" />
            <h2 className="name">{contact.firstName} {contact.lastName}</h2>
            <div className="detailsContainer">
                <p className="textrow"><b>Email:</b> {contact.email}</p>
                <p className="textrow"><b>Job title:</b> {contact.jobTitle}</p>
                <p className="textrow"><b>Street:</b> {contact.street}</p>
                <p className="textrow"><b>City:</b> {contact.city}</p>
                <b className="textrow">Favourite colour:</b>
                <div className="colourBox" style={{ backgroundColor: contact.favouriteColour }}>
                    {contact.favouriteColour}
                </div>
                <b className="posMap">Position on map:</b>
                <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
            </div>
            <button className="updateButton" onClick={() => navigate(`/update/${id}`)}>Update</button>
            <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </div>
    )
}