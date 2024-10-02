import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteAContact } from "../../ContactAPI/ContactAPIs";

export default function ContactProfile() {
    const { contacts } = useContext(AppContext);
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const navigate = useNavigate();

    const fetchContact = () => {
    const con = contacts.find((c) => c.id === Number(id));
    if (con !== null) {
        setContact(con);
    } else {
        console.log("Contact not found");
    }
   }

   const deleteContact = () => {
    DeleteAContact(id);
    navigate("/contacts");
   }

   useEffect(() => {
    fetchContact();
   }, [id, contacts])

   if (!contact) return <p>Loading.....</p>

   return(
    <article className="viewContact">
        <h2>{contact.firstName} {contact.lastName}</h2>
        <h4>City: {contact.city}</h4>
        <h4> Street: {contact.street}</h4>
        <button className="deleteButton" onClick={deleteContact}>Delete Contact</button>
        <Link to={`/update/${contact.id}`}>Update Contact</Link>
    </article>
   );
}