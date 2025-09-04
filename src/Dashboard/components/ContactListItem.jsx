import { Link } from "react-router-dom";

export default function ContactListItem ({contact}) {






  return(<>

    <li>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <Link to={`/contact/${contact.id}`}>
      <p> view profile</p>
      </Link>


    </li>


  </>)


  
}
