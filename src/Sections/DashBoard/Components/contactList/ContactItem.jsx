import { ContactContext } from '../..';
import {  useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

ContactItem.propTypes = {
    contact: PropTypes.object
}



export default function ContactItem(props) {
    const { contact} = props
    // Calling useContext:
    const {contacts, setContact} = useContext(ContactContext)

    function handleClick(event) {
        const {name} = event.target
        if (name === "delete") {
            const updatedContext = contacts.filter((c) => c !== contact)
            setContact(updatedContext)
            alert("Contact deleted successfully!")
        }
    }

  return (
   <li className="contact-item">
        <div className="contact-info">
            <h3> {`${contact.firstName} ${contact.lastName}`} </h3>
            <Link className="view-link" to={`/view/${contact.id}`} state={{contact: contact}}> View </Link>
            
            {/* Delete Button */}
            <button className="delete-button"  name="delete" type="button" onClick={(e) => {handleClick(e)}}>Delete contact</button>
            <button className='edit-button' type='button'> <Link to={`/edit/${contact.id}`} state={{contact: contact}}>Edit</Link>
        </button>
            
        </div>
   </li>
  )
}


// ON Hold over -> use that person -> on click view -> open view of that person?
