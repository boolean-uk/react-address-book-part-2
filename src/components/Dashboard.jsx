import { useContext } from "react";
import ContactListItem from "./ContactListItem";
import { ContactContext } from "../App";

function Dashboard(){
    const { contacts } = useContext(ContactContext);
    //console.log(contacts)

    return(
        <div className="contact-list-container">
            <ul>
                {contacts.map((contact, i) => (
                    <ContactListItem contact={contact} key={i}/>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard