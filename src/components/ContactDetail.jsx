import { useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../App";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
    
    const { contacts } = useContext(ContactContext);
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(contacts)
        console.log(id)

        if (contacts && id) {

            const foundedcontact = contacts.find((contact) => contact.id === Number(id))

            if (foundedcontact) {
            setContact(foundedcontact)

        }

    }
    

},  [contacts, id]);

    const handleDelete = async () => {
        try {
          const response = await fetch(`https://boolean-uk-api-server.fly.dev/alihaiderkhannn/contact/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok){
                throw new Error('Failed while deleting the contact')
            }

            navigate('/contacts')
            
        } catch(error){
            console.error("Error while deleting the contact", error)
        }
    }
    

if (!contact) return <p>Loading...</p>

return (
    <div className="contactdetail-container">
        <h3>Name: {contact.firstName} {contact.lastName}</h3>
        <p>Street: {contact.street}</p>
        <p>City: {contact.city}</p>
        <button onClick={handleDelete}>Delete Contact</button>
    </div>
)

}