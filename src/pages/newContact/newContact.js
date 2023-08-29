import ContactForm from "./components/ContactForm"

function NewContact(props) {
    const { contacts, setContacts } = props

    return (
        <div className="main">
            <h2>Create Contact</h2>
            <ContactForm contacts={contacts} setContacts={setContacts} />
        </div>
    )
}
export default NewContact