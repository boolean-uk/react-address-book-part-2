import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fullURL } from "./API-Helper"
import { Link } from 'react-router-dom'
import "./ContactView.css"

export default function ViewContact() {
    //Navigation and ID recognition
    const nav = useNavigate()
    const { id } = useParams()
    //Contact info state

    const [contact, setContact] = useState({})

    //check if data exists
    console.log(`${fullURL}/contact/${id}`)

    useEffect(() => {
        fetch(`${fullURL}/contact/${id}`)
            .then(resp => resp.json())
            .then((data) => setContact(data))
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }, [])

    const DeleteContact = async (d) => {
        const response = await fetch(`${fullURL}/contact/${id}`, {
             method: DELETE,
             headers: {'Content-Type': 'application/json'
            }})
        nav('/')
    }

    if (!contact) return (<p>loading...</p>)

    return (
        <>
            <header>
                <h2>
                    {contact.firstName + " " + contact.lastName}
                </h2>
            </header>
            <div className="contact-address">
                Street: {contact.street}
                <br />
                City: {contact.city}
            </div>
            <Link to={`/edit/${contact.id}`}>
                <button className="nav-edit-contact">
                    Edit
                </button>
            </Link>
            <button className="delete-contact" onClick={DeleteContact}>Delete</button>
        </>
    )
}