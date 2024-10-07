import { useNavigate  } from "react-router-dom";
import { useContext } from 'react';
import { contactContext } from "../App";
import { personContext } from "./ContactInfo";

export default function DeleteContact(){
    const url = "https://boolean-uk-api-server.fly.dev/brandsegg/contact"

    const { contacts, setContacts } = useContext(contactContext)
    const { person } = useContext(personContext)

    const navigate = useNavigate();
    
    const deletePerson = () => {
        //console.log(`${url}/${person.id}`)
        console.log(person)
        const request = {
            method: "DELETE",
            headers:{'Content-Type': 'application/json', 'accept': 'application/json'},
            body: JSON.stringify(person),
        }
        
        fetch(`${url}/${person.id}` , request).then(response => response.json()).then(setContacts([contacts.filter((p) => p.id !== person.id)]))

        navigate('/')
    }

    return (
        <div>
            <button onClick={deletePerson}>Delete account!</button>
        </div>
    )
}