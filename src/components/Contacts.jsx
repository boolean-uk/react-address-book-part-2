
import { useContext } from "react"
import { MyContext} from "../App"
import { Link, Route, Routes } from 'react-router-dom';
import Delete from "./Delete";


export default function Contacts(){
    
    const context = useContext(MyContext)

    return <>
    <ul>

    {context.contacts.map( (contact, index) => (
        <>
        <li key={index}>
            <p>{contact.firstName} {contact.lastName} &#160;&#160; &#160;
            <Link to={`/contacts/${contact.id}`}>View</Link> &#160;&#160;&#160;
            <Delete contact={contact}/>
            <Link to={`/Put/${contact.id}`}>Put</Link>

            </p>
            
        </li>
        </>
    )
    )}
    </ul>
            <Link to={`/Delete`}>DELETE ALL</Link> &#160;&#160;&#160;

    </>
}