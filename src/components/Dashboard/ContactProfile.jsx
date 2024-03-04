import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";

const ContactProfile = (props) => {

    const {username, id} = useParams();

    const {contacts} = props ?? {};

    const [contact, setContact] = useState();

    useEffect(() => {
        const contactFound = contacts.find((cont) => Number(id) === Number(cont.id));
        setContact(contactFound);
        
    }, []);

    if(!contacts || !contact) {
        return <p>Loading...</p>
    }

    return (
        <>
        <div>
            <Menu />
        </div>

        <h2>
            {contact.firstName} {contact.lastName}
        </h2>
        <p>
            Street: {contact.street}
        </p>
        <p>
            City: {contact.city}
        </p></>
    );
}

export default ContactProfile;