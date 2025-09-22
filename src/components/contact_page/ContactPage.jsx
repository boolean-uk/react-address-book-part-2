import {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ContactContext} from "../../App.jsx";

function ContactPage(props) {
    const {url, contacts, setContacts} = useContext(ContactContext);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!contacts || contacts.length === 0) {
            navigate("/");
        }
    });
    
    if (!contacts || contacts.length === 0) {
        return null;
    }

    const contact = contacts.find((contact) => {
        console.log(`${contact.id} and ${id}`)
        return String(contact.id) === id;
    });

    return (
        <section className="contactPage">
            <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
            <h3>{`Lives at: ${contact.street} in ${contact.city}`}</h3>
        </section>
    );
}

export default ContactPage;