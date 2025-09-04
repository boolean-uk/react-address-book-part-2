import Contact from "./Contact";

function ContactList({ contacts }) {
    
    return (
        <section>
            <h1>Contacts</h1> 

            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}> 
                    <Contact key={index} contact={contact} />
                    </li>
                    
                ))}
            </ul>
            
        </section>
    )
}

export default ContactList;