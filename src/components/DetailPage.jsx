import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../App";

export default function DetailPage() {
    const {contacts, deleteContact} = useContext(ContactContext)
    const {id} = useParams();
    const contact = contacts.find((x) => x.id === Number(id))
    const navigate = useNavigate()
    

    if (!contacts) return <p>Loading...</p>;
    if (!contact) return <p>Contact not found</p>;

    const onDelete = async () => {
        await deleteContact(contact.id)
        navigate('/')
    }

    return (
        <>
            <img src={contact.profileImage} alt="" className="pic"/>
            <h3>{contact.firstName + " " + contact.lastName}</h3>
            <p>{"Street: " + contact.street}</p>
            <p>{"City: " + contact.city}</p>
            <button onClick={() => navigate("/edit/" + contact.id)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}