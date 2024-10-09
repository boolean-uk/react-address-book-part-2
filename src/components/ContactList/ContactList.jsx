import { useContext } from "react";
import { ContactContext } from "../../App";
import ContactListItem from "./ContactListItem";
import './ContactList.css';

export default function ContactList(){
    const {contacts} = useContext(ContactContext)

    return(
        <div className='ContactList'>
            <h2>ContactList</h2>
            <ul className="ContactElements">
                {contacts.map((contact, index)=>(
                    <ContactListItem contact={contact} key={index}/>
                ))}
            </ul>
        </div>
    );
}