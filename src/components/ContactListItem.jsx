import { Link } from "react-router-dom"
function ContactListItem({ contact }){

    const contactUrl =  "/view/" + contact.id
    return(
        <li>
          <h4>
            <Link to={contactUrl}>{contact.firstName} {contact.lastName}</Link>
          </h4>
        </li>
    )
}

export default ContactListItem