import ContactList from './ContactList'

function ContactPage(props) {
    const {contacts} = props

    return (
        <main className="dashboard">
            <h2>Contacts</h2>
            <ContactList contacts={contacts} />
            
        </main>
    )
}

export default ContactPage