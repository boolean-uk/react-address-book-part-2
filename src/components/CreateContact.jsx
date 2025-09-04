import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContactForm from "./ContactForm"
import { ContactContext } from "../App"

function CreateContact() {
  const { setContacts, contact_url } = useContext(ContactContext)
  const navigate = useNavigate()
  const handleCreate = async (newContact) => {
    // newContact is the formData from ContactForm
    try {
        // console.log(newContact);
        const response = await fetch(contact_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(newContact),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const created = await response.json();

        setContacts((prev) => [...prev, created]);
        navigate("/dashboard")
    }
    catch (error) {
        console.error("Failed to create contact", error)
    }
  }
  return (
    <div>
        <h3 style={{ marginLeft: 160 }}>Create a new contact</h3>
        <div className='.contact-info'>
            <ContactForm onSubmit={handleCreate} />
        </div>
    </div>
  )
}

export default CreateContact