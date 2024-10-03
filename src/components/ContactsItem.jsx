import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function ContactsItem({contact, setContact}) {


    const nav = useNavigate();

    function ManageDelete() {
        const dewIt = window.confirm(
            `Do you want to delete ${contact.firstName} ${contact.lastName} permanently?`
        )
        if(dewIt) { 
            fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${contact.id}`, {
                method: "DELETE",
            }).then(setContact).then(() => {
                nav('/contacts')
            })
        }
    }

    


    return (
        <li>
            <Link to={`/contacts/${contact.id}`} onClick={() =>  setContact(contact)}>
                {contact.firstName} {contact.lastName}
            </Link>
            <Link to='/'>
				<button onClick={ManageDelete}>Delete Contact</button>
			</Link>
            <Link to={`/edit-contact/${contact.id}`}>
                <button>Edit Contact</button>
            </Link>
        </li>
    )
} 