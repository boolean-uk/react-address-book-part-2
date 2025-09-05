
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../App.jsx";
import { useNavigate } from "react-router-dom";

function ContactEdit() {

    const { id } = useParams();
    const { contact, setContact, fetchContact, setFetchContact } = useContext(ContactContext);
    const nav = useNavigate();

    const handleEdit  = async () => {
        try {
            const response = await fetch(
                `https://boolean-uk-api-server.fly.dev/598115/contact/${id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(contact)
                }
            );
            const data = await response.json();
            setContact(data);
            nav('/contact/' + contact.id);
            const refetch = !fetchContact;
            setFetchContact(refetch);
        } catch (error) {
            console.error("Failed to fetch contact:", error);
        }
    }

  return (
    <form>
    <div>contactEdit
        <label htmlFor="firstName">First Name:</label>
        <input
            id="firstName"
            type="text"
            value={contact.firstName}
            onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
            id="lastName"
            type="text"
            value={contact.lastName}
            onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
        <label htmlFor="street">Street:</label>
        <input
            id="street"
            type="text"
            value={contact.street}
            onChange={(e) => setContact({ ...contact, street: e.target.value })}
        />
        <label htmlFor="city">City:</label>
        <input
            id="city"
            type="text"
            value={contact.city}
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
        />
        <button type="button" onClick={handleEdit}>Save</button>
    </div>
    </form>
  )
}

export default ContactEdit