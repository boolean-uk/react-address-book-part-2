import { useParams } from "react-router-dom"
import ContactDetailsItem from "./ContactDetailsItem"

export default function ContactDetails(props) {
    const { contacts } = props

    const params = useParams()

    const contact = contacts.find(c => c.id === Number(params.id))

    return (
        <main className="contact-details">
            {contact && <ContactDetailsItem contact={contact} />}

            {!contact &&
                <p>
                    Was not possible to display the contact details. Please return to the Contacts List Menu!
                </p>}
        </main>
    )
}