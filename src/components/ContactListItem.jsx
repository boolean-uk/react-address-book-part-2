import { useNavigate } from 'react-router-dom';

const ContactListItem = ({ contact }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/contact/${contact.id}`)
    }

    return (
        <li>
            <span>{contact.firstName} {contact.lastName}<button onClick={() => handleClick()}> View </button> </span>
            
        </li>
    )

}

export default ContactListItem