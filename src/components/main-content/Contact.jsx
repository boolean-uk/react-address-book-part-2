import { Link } from "react-router-dom";

export default function Concact( {contact}){
  return (
    <>
      <li id="contact" >
        <p>{contact.firstName}</p> <Link to={`/Details/${contact.id}`}>View</Link>
      </li>
      <hr/>
    </>
  )
}