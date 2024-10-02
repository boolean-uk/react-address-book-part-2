import { useEffect, useState, useContext } from "react"
import { ContactContext } from "../App"
import { useParams, useNavigate, Link } from 'react-router-dom'


function ContactView() {
    const { contacts, setContacts } = useContext(ContactContext)
    const { id } = useParams()

    const [contact, setContact] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (contacts && id) {
            const co = contacts.find((c) => Number(c.id) === Number(id));
            setContact(co);
        }
    }, [contacts, id])

    if (!contact) return <p>Loading...</p>

    const deleteContact = () => {
        // Create a new array by filtering out the contact, and set contacts to it
        const newContacts = contacts.filter((c) => c !== contact)
        setContacts(newContacts)

        // Remove it from the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/contact/${id}`, {
            method: "DELETE",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            }
        })

        // Navigate back to root
        navigate("/")
    }

    return (
        <section className="contactsView">
            <h2>Contact</h2>
            <p>{`Name: ${contact.firstName} ${contact.lastName}`}</p>
            <p>{`Address: ${contact.street}, ${contact.city}`}</p>
            <button onClick={deleteContact}>Delete</button>
            <Link to={`/add/${contact.id}`}>
                <button >Update</button>
            </Link>

        </section>
    )
}

export default ContactView