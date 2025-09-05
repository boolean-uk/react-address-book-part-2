import { Link } from 'react-router-dom';
import { ContactContext } from '../App';
import { useContext } from 'react';


function PeopleList() {
  const { contacts } = useContext(ContactContext)

  return (
    <ul>
      {contacts.map((person, index) => (
        <>
        <Link to={`/contact/${person.id}`}>
          <li key={index}><p>{`${person.firstName} ${person.lastName}`}</p></li>
        </Link>
        </>
      ))}
    </ul>
  )
}

export default PeopleList;