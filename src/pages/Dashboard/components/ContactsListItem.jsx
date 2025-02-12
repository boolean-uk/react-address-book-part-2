import {Link} from 'react-router-dom';

export default function ContactsListItem({contact}) {


  return (
    <li>
      <h3 >
      {contact.firstName} {contact.lastName}  <Link to={`/contact/${contact.id}`}>View</Link> 
      </h3>
      
    </li>
  )
}
