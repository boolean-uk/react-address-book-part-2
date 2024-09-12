import { Link } from "react-router-dom"

function ContactListItem({ contact }) {

    return (
        <div className="contactItem">
          <p>
          {contact.firstName} {contact.lastName}   {}   
            <Link to ={`/contact/${contact.id}`} className="contactInfo">View</Link>                     
          </p>
        </div>
    )
}

export default ContactListItem