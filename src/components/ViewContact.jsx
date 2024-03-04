import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fullURL } from "./ContactList";

export default function ViewContactComponent(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: ""
    })

    useEffect(() => {
        fetch(`${fullURL}/contact/${id}`)
            .then(response => response.json())
            .then((data) => setContact(data))
    }, [])

    const deleteContact = async (e) => {
        const response = await fetch(`${fullURL}/contact/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        navigate('/')
    }

    if (!contact) return (<p>loading...</p>)

    return (
        <>
            <header>
                <h1>
                    {contact.firstName + " " + contact.lastName}
                </h1>
            </header>
            <div>
                {contact.street + " " + contact.city}
            </div>
            <Link to={`/edit/${contact.id}`}>
                <button className="nav-edit-contact">
                    Edit
                </button>
            </Link>
            <button className="delete-contact" onClick={deleteContact}>
                Delete
            </button>
        </>
    )
}