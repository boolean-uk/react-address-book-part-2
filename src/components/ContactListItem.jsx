import { Link } from 'react-router-dom';
export default function ContactListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.firstName} {person.lastName}
      </h3>
      {person.street && <p>Stree: {person.street}</p>}
      <Link to={`/contact/${person.id}`}>
         Profile
      </Link>
    </li>
  )
}

