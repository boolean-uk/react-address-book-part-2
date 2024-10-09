import { useContext, useEffect } from "react";
import { ContactContext } from "../../../App";
import { useParams } from "react-router-dom";
import './ContactProfile.css'

export default function ContactProfile(){
    const {id} = useParams()
    const {contacts} = useContext(ContactContext)

    const currentContact = contacts.find(c => c.id === Number(id))
    //const {firstName, lastName, street, city} = currentContact

    return(
        <div className='profile-card'>
            <h1 className="fullName">{currentContact.firstName + ' ' + currentContact.lastName}</h1>
            <p className="street">{currentContact.street}</p>
            <p className="city">{currentContact.city}</p>
        </div>
    );
}