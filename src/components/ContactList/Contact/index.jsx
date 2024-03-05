import { Link, useNavigate } from "react-router-dom"

function Contact(props) {
    const { contact, contacts, setContacts } = props
    const navigate = useNavigate()

    const handleClick = (event) => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contact.id}`,
        {
            method: "DELETE",
        })
        
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