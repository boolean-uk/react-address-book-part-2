import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
  const { contacts } = props

  return (
    <div className="edit-contact-container">
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contacts, i) => (
            <ContactListItem key={i} contact={contacts} />
        ))}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default ContactList