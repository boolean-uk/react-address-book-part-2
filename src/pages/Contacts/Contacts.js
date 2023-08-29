import ContactList from "./components/ContactList";

function Contacts(props) {
    const { contacts, setContacts } = props

    const handleDelete = (idDelete) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== idDelete)

        setContacts(updatedContacts)
    }

    return (
        <main className="main">
            <h2>Contacts</h2>
            <ContactList contacts={contacts} onDelete={handleDelete}/>
        </main>
    )
}
export default Contacts