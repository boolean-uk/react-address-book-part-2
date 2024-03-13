import { Link } from 'react-router-dom';
export default function ContactListItem(props) {
  const { person, deleteContact } = props;

  return (
    <li>
      <h3>{person.firstName} {person.lastName}</h3>
      {person.street && <p>Street: {person.street}</p>}
      <Link to={`/contact/${person.id}`}><button>Profile</button></Link>
      <button onClick={() => deleteContact(person.id)}>Delete</button>
      <Link to={`/contact/edit/${person.id}`}><button>Edit</button></Link>

    </li>
  );
}