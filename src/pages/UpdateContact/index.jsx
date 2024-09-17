import { useNavigate, useParams } from "react-router-dom"
import ContactForm from "../../components/ContactForm"
import { useEffect, useState } from "react";

function UpdateContact({ contacts, updateContact }) {
    const [contact, setContact] = useState(null)
    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        if (contacts && id) {
          setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
    }, [contacts, id]);

    const submitData = (userData) => {
        updateContact(userData)
        navigate(`/view/${contact.id}`)
    }

    if (!contact) return <p>Contact Not Found</p>

    return (
        <div>
            <h1>Update Contact</h1>
            <ContactForm submitData={submitData} initialFormState={contact} />
        </div>
    )
}

export default UpdateContact