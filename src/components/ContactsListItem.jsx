import { Link } from "react-router-dom"

export default function ContactsListItem(props) {
    const {index, contact, onDelete} = props
    const handleDelete = () =>{
        onDelete(contact.id); // pass this <li> contact email to onDelete function in App
    }

    return(
        <li key={index}>
            <h3>
                {contact.firstName} {contact.lastName}
            </h3>
            {contact.email && <p>Email: {contact.email}</p>}
            <Link to={`/contacts/${contact.id}`}>View</Link>
            <button onClick={handleDelete}>Delete contact</button> {/* extension, deletes contact */}
        </li>
    )
}