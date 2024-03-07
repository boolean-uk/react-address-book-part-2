import PropTypes from 'prop-types'
import ContactListItem from './components/ContactListItem'

function ContactList(props) {
    const { contacts } = props;

    return (
        <>
            <h1>Contact list</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <ContactListItem key={index} contact={contact} />
                ))}
            </ul>
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;