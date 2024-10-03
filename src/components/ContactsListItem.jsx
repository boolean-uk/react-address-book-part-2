import { useNavigate } from "react-router-dom";


export function ContactsListItem({contact}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/contact/${contact.id}`);
      };

    return(
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
            <h3>{contact.firstName} {contact.lastName}</h3>
        </li>
    )
}

