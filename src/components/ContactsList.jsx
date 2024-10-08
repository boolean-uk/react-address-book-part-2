import ContactItem from './ContactItem'

function ContactsList({contacts, deleteContact}){
    return(
        <section>
            <h3>Contacts</h3>
            <ul>
                {contacts.map((contact, index) => (
                    <ContactItem key={index} contact={contact} deleteContact={deleteContact}/>
                ))}
            </ul>
        </section>
        
    )
}

export default ContactsList