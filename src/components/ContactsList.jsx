import ContactListItem from "./ContactListItem";

function ContactsList({ contacts }) {
    return (
      <div className="contacts-div">
        <ul className="contacts-ul">
          {contacts.map((contact, index) => (
            <ContactListItem 
                key={index} 
                contact={contact}
            />
          ))}
        </ul>
      </div>
    );
}

export default ContactsList