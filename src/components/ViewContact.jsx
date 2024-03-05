import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewContact(props) {
    const [contact, setContact] = useState(null);

    // Get the `id` parameter from the URL path
    const { id } = useParams();

    const { contacts } = props;

    // Use `useEffect` so that when we navigate to a product's detailed page
    // we update our product state with the product found by the `id` parameter.
    useEffect(() => {
        console.log('id: ' + id)
        // We only update the product state when we have all the necessary data
        if (contacts && id) {
            setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
    }, [contacts, id]);

    // When the component first renders, we won't have the product yet,
    // so we should display a useful message.
    if (!contact) return <div>Loading...</div>;

    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
            <p>{contact.city}</p>
        </div>
    )
}

export default ViewContact