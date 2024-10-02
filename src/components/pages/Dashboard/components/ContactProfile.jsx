import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteContact } from "../../../ContactAPI/ContactAPIs";

export default function ContactsProfile() {
    const { contacts } = useContext(AppContext)
    const { id } = useParams()
    const [contact, setContact] = useState(null)
    const navigate = useNavigate()


    const fetchContact = () => {
        const pax = contacts.find((c) => c.id === Number(id))
        if(pax){
            setContact(pax)
        }
        else {
            console.error("contact not found")
        }
        
    }

    const deleteContact = () => {
        DeleteContact(id)
        navigate("/contacts")
    }

    useEffect(() => {
        fetchContact()
    }, [id, contacts])

    if(!contact) return <p>loading ...</p>

    return(
        <article className="viewContact">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <h4>City: {contact.city}</h4>
            <h4>Street: {contact.street}</h4>
            <button className="deleteButton" onClick={deleteContact}>Delete contact</button>
            
            <Link to={`/update/${contact.id}`}>Update Contact</Link>
            <Link to="/contacts">Back to Contacts</Link>
        </article>
    )
}