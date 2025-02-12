import { useContext, useEffect } from "react";
import { MyContext } from "../../../App";
import ContactListItem from "./ContactListItem";


function ContactList(){
    const { contacts, setContacts } = useContext(MyContext)

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact`)
          .then((res) => res.json())
          .then((data) => setContacts(data));
      }, []);

    return(
        <ul>
            {contacts?.map((contact, index) => (
                <ContactListItem key={index} contact={contact}/>
            ))}
        </ul>
    );
}

export default ContactList

