import ContactListItem from "./ContactListItem"

function ContactList({contacts}){
    

    return (
        <>
        <div><h2 className="header">All contacts</h2>
        <ul className="contact-list">
            {contacts.map((contact, index)=>(
                <ContactListItem key={index} contactItem={contact} />
            ))}
            
        </ul></div>
        </>
    )
}

export default ContactList