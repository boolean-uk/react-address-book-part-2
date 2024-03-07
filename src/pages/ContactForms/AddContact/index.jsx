import PropTypes from 'prop-types';
import AddContactForm from '../components/AddContactForm';

function AddContact(props) {
    const { addContact, contacts, setContacts } = props;

    return (
        <>
            <h1>Add contact</h1>
            <AddContactForm addContact={addContact} contacts={contacts} setContacts={setContacts} />
        </>
    );
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
    setContacts: PropTypes.func.isRequired
};

export default AddContact

