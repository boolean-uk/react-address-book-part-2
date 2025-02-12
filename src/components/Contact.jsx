import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../App";
import { useContext } from "react";

function Contact({ contact }){
    const contactContext = useContext(ContactContext)
    const navigate = useNavigate()

    function handleOnClick(){
        try {
            fetch(
                `https://boolean-uk-api-server.fly.dev/robin-ka/contact/${contact.id}`,
                { method: "DELETE" }
            );
        } catch (error) {
            console.log(error)
        }
        contactContext.setContacts(contactContext.contacts.filter((c) => c.id !== contact.id));
        navigate("/")
    }

    return (
        <>

            <li className="contact">
                <p> {contact.firstName} {contact.lastName}</p>
                <Link to={`/view/${contact.id}`}>View Contact</Link>
                <button onClick={handleOnClick}>Delete Contact</button>
            </li>
        
        </>
    )

}


export default Contact