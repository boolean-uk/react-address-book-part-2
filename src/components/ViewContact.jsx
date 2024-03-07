import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fullURL } from "./ContactList"

export default function ViewContact(props) {
    //Navigation and ID recognition
    const nav = useNavigate()
    const { id } = useParams()
    //Contact info state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        fetch(`${fullURL}/contact/${id}`)
            .then(resp => resp.json)
            .then((data) => setContact(data))
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
                    {firstName + " " + lastName}
                </h2>
            </header>
            <div>
                {street}
                {city}
            </div>
            <button class="delete-contact" onclick={DeleteContact}>Delete</button>
        </>
    )
}