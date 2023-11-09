import { Link } from "react-router-dom";

export default function ContactListItem(props) {
    const {contact} = props;
    console.log(contact);
    return (
        <li className="contact-list-item">
            
            <Link to={`/contact/${contact.id}`} state={{contact}}><h3>{contact.firstName}  {contact.lastName}</h3></Link>
        </li>);

    }