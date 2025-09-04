import { Link } from "react-router-dom"
export default function ContactListItem(props) {
    const {contact} = props
    return (
    <div className="contact">
    <span className="name"> 
        {contact.firstName} {contact.lastName}
    </span>
    <Link className="view-button" to={`/contact/${contact.id}`}>View</Link>
    </div>
   )
}