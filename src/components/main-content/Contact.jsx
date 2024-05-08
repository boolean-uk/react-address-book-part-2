import { Link } from "react-router-dom";
import '/src/style/Contact.css'

export default function Concact( {contact}){
  return (
    <>
      <li id="contact" >
        <p>{contact.firstName}</p> <Link to='/Details'>View</Link>
      </li>
      <hr/>
    </>
  )
}