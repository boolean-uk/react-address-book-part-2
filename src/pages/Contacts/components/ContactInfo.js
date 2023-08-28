import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactInfo(props) {
    const [contact, setContact] = useState([])
    const { contacts } = props;
    const { id } = useParams();


    useEffect(() => {
        if (contacts.length > 0) {
            const foundContact = contacts.find((cnt) => cnt.id === parseInt(id));
            setContact(foundContact);
        }
    }, [contact, contacts, id])

    if (!contact) {
        return <div>Contact not found</div>;
      }
      if (!contact.address) {
        return <div>Contact has no address information</div>;
      }
    
      if (!contact.address.street || !contact.address.city) {
        return <div>Contact address is incomplete</div>;
      }

    return (
        <main className="main">
            <h2>{contact.name}</h2>
            {contact && (<ul>
                <li className="contactInfo-item">
                <p>{contact.address.street} {contact.address.city}</p>
                </li>
            </ul>)}
        </main>
    )
}
export default ContactInfo