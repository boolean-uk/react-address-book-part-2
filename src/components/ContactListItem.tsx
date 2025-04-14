import React, { useContext, useState } from 'react';
import { User } from '../objects/UserObjects';
import { AlterContactModes, ContactsContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function ContactListItem(props : {contact : User}){
    const [clicked, setClicked] = useState<boolean>(false)
    const { setDeleteContact, deleteContact, setAlteredContact, setAlterContactMode } = useContext(ContactsContext)
    const { contact } = props;
    const navigate = useNavigate();

    const click = () => {
        setClicked(!clicked)
    }

    const updateUser = () => {
        console.log("hit")
        setAlteredContact(contact);
        setAlterContactMode(AlterContactModes.Update);
        navigate("/AlterContact");
    }

    const deleteAlteredContact = () => {
        setAlteredContact(contact);
        setDeleteContact(!deleteContact);


    }
    return (
        <li className='user-card' onClick={() => click()}>
            <ul>
                <li>
                {"Name: " + contact.firstName + " " + contact.lastName}
                </li>
                
                {clicked  &&
                <>
                <li>{"Street: " + contact.street}</li>
        
                <li>{"City: " + contact.city}</li>
                </>
                }
                
            </ul>
            <button className='delete-btn' onClick={() => deleteAlteredContact()}>Delete</button>
            <button className='update-btn' onClick={()  => updateUser()}>Update</button>
    </li>

            
            
    );
}