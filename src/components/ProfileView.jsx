import { useContext } from "react"
import { ContactContext } from "../App"
import { useNavigate, useParams } from "react-router-dom";

export function ProfileView() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const { contacts, fetchContacts } = useContext(ContactContext);
    const contact = contacts.find(c => c.id === parseInt(id));

    const handleDelete = async () => {
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/contact/${id}`, {
            method: 'DELETE',
        });
        await fetchContacts(); 
        navigate('/'); 
    };
   
    return(
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>City: {contact.city}</p>
            <p>Street: {contact.street}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}