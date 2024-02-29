import { useNavigate } from "react-router-dom"

function ContactListItem({contact}){
    const navigate = useNavigate()

    return (
        <h1 onClick={() => navigate(`/contact/${contact.id}`)}>{`${contact.firstName} ${contact.lastName}`}</h1>
    )
}

export default ContactListItem