
import {  Link } from "react-router-dom";
function ContactItem(props) {

    
    

    const{contact}=props
    const{num}=props

    return (
        <li>
            <h3>
            
            <Link to={"/contact/"+num}>{contact.firstName} {contact.lastName}</Link>
            </h3>

           
        
        </li>
    )
  }
  
export default ContactItem