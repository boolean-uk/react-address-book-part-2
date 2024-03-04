import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
  const { contacts } = props
  
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, i) => (
            <ContactListItem key={i} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default ContactList
