import { Link } from 'react-router-dom';

function ContactsList(props) {
    const { contact, index } = props

    return (
        <li key={index}>
            <p>{contact.firstName + ' ' + contact.lastName} <Link to={"/view/" + contact.id}>View</Link></p>
        </li>
    )
}

export default ContactsList
