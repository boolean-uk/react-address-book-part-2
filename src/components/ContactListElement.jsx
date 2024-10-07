import { Link } from "react-router-dom";
import { useContext } from 'react';
import { contactContext } from "../App";

export default function ContactListElement(props){
    
    const {contact} = props
    return (
        <li>
           <Link to={`/contact/${contact.id}`}>
            <h3>
              {contact.firstName} {contact.lastName}
            </h3>
          </Link>
        </li>
      )
}