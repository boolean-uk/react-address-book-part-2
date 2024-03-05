import { Link, useNavigate } from "react-router-dom"

function Contact(props) {
    const { contact, contacts, setContacts } = props
    const navigate = useNavigate()

    const handleClick = (event) => {
        const newContactList = contacts.filter((c) => {
            c.id !== contact.id
        })
        setContacts(newContactList)
        navigate("/contactlist")
    }

    return(
        <li className="contact-list-item">
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>
            <button onClick={handleClick}>Delete</button>
        </li>
    )
}

export default Contact