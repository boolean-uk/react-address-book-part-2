import { Link } from "react-router-dom";

function ContactListItem({firstName, lastName, id}) {
    return (
        <>
            <p>{firstName} {lastName} <Link to={`/contacts/${id}`}>View</Link></p>
            
        </>
    )
}
export default ContactListItem;