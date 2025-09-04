import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ContactForm from "./ContactForm"
import { ContactContext } from "../App"

function UpdateContact() {
  const { id } = useParams()
  const { contacts, setContacts, contact_url } = useContext(ContactContext)
  const contact = contacts.find(c => c.id == id)

  const initialValues = {
    firstName : contact.firstName || '',
    lastName : contact.lastName || '',
    street : contact.street || '',
    city : contact.city || '',
    gender : contact.gender || '',
    email: contact.email || '',
    jobTitle : contact.jobTitle || '',
    latitude : contact.latitude || 0,
    longitude : contact.longitude || 0,
    favouriteColour : contact.favouriteColour || '',
    profileImage : contact.profileImage || ''
  }

  const navigate = useNavigate()
  const handleUpdate = async (newContact) => {
    try {
        const response = await fetch(contact_url + '/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(newContact),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const updated = await response.json();

        setContacts((prev) =>
            prev.map((c) => (String(c.id) === String(id) ? updated : c))
        )
        navigate(`/contact/${id}`)
    }
    catch (error) {
        console.error("Failed to Update contact", error)
    }
  }
  return (
    <div>
        <h3 style={{ marginLeft: 190 }}>Update contact</h3>
        <div className='.contact-info'>
            <ContactForm onSubmit={handleUpdate} initialValues={initialValues} />
        </div>
    </div>
  )
}

export default UpdateContact