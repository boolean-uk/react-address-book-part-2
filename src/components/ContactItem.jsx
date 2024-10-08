import {Link} from "react-router-dom"

function ContactItem({contact}){
    return(
        <li>
            <h3>
                {contact.firstName} {contact.lastName}
            </h3>
            <button>
                <Link to={`/contact/${contact.id}`}>View contact</Link>
            </button>
        </li>
    )
}

export default ContactItem