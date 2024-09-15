import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";

function ViewContact(props) {
    const [contact, setContact] = useState(null);

    const navigate = useNavigate();

    // Get the `id` parameter from the URL path
    const { id } = useParams();

    const { contacts } = props;

    // Use `useEffect` so that when we navigate to a contact's detailed page
    // we update our contact state with the contact found by the `id` parameter.
    useEffect(() => {
        // We only update the contact state when we have all the necessary data
        console.log('id: ' + id)
        if (contacts && id) {
            setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
    }, [contacts, id]);

    //placeholder innan contacts hämtats. behövs här
    if (!contact) return <div>Loading...</div>;

    const deleteContact = () => {
        //radera med DELETE anrop
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/contact/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })

        //navigate to dashboard
        navigate('/');
    }

    return (
        <div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}</p>
            <p>{contact.city}</p>
            <button
                onClick={deleteContact}>
                Delete
            </button>
            <Link to={`/contacts/${contact.id}/update`} >
                Update Contact
            </Link>
        </div>
    )
}

export default ViewContact