import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"



const url = "https://boolean-api-server.fly.dev/Vayeros/contact/"

function ContactDetails() {
    const {id} = useParams()
    const [contact, setContact] = useState(null)
    const navigate = useNavigate() 

    useEffect(() => {
        fetch(url + id)
            .then(response => response.json())
            .then(data => { setContact(data) })
    }, [id])

    const handleDelete = () => {
        fetch(url + id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate('/'))
    }

    return (
        <div>
            <h1>Contact Details</h1>
            {contact ? (
                <>
                    <h2>{contact.firstName} {contact.lastName}</h2>
                    <div>
                        <p><b>Email:</b> {contact.email}</p>
                        <p><b>Gender:</b> {contact.gender}</p>
                        <p><b>Job title:</b> {contact.jobTitle}</p>
                        <p><b>Street:</b> {contact.street}</p>
                        <p><b>City:</b> {contact.city}</p>
                        <p><b>Favourite colour:</b> {contact.favouriteColour} </p>
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => navigate(`/update/${id}`)}>Update</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
    
}

export default ContactDetails