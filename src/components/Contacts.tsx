import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactItem from "./ContactItem";
import { ContactsContext } from "../Contexts";

function Contacts(){

    const {contacts, setContacts} = useContext(ContactsContext)
    const navigate = useNavigate();

    const fetchContacts = async () => {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/sanderrasmussen/contact")
        const jsonResponse = await response.json()
        setContacts(jsonResponse)
        console.log(contacts)
    }
    useEffect(() =>{
        fetchContacts();
    }, [])    
    
    return(
        <div className="contacts">
                  <button onClick={() => navigate(-1)}>go back</button>
            {contacts?.map(contact=>
            <li>
                <h4>{contact.firstName}{contact.lastName}</h4>
                <Link to={`/Contacts/${contact.id}`}>
                <p > view more</p>
                </Link>

            </li>
            
            )}
        </div>
    )
}
export default Contacts;