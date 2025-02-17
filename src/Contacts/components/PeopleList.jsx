import { useContext } from 'react';
import PeopleListItem from './PeopleListItem'
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

function PeopleList() {
  const context = useContext(MyContext)
    console.log(context.people)
  return (
    <ul>
      {context.people.map((person, index) => (
        <><PeopleListItem key={index} person={person} />
        <Link to={`view/${person.id}`}>
          View person
        </Link></>
      ))}
    </ul>
  )
}

export default PeopleList