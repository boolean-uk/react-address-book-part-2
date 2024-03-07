import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditContactForm from '../components/EditContactForm';

function EditContact(props) {
    const { contacts, updateContact } = props;
    const [contact, setContact] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const foundContact = contacts.find(c => c.id.toString() === id);
        setContact(foundContact);
    }, [contacts, id]);

    return (
        <>
            <h1>Edit contact</h1>
            <EditContactForm contact={contact} updateContact={updateContact} />
        </>
    )
}

export default EditContact;