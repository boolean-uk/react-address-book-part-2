
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';
import NavigationBar from '../NavigationBar';

function PersonProfile() {
  const [person, setPerson] = useState(null)
  const context = useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    if (context.people && id) {
        const matchingPerson = context.people.find((person) => 
            person.id == id
        //Not sure if this check is bad because it is too lenient?
        )
        setPerson(matchingPerson)
    }
  }, [context.people, id])


  if (!person) return <p>Something went wrong! The selected person seems to not exist...</p>

  return (
    <div>
    <article>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <ul>
        <li>
          {person.street} {person.city}
        </li>
      </ul>
    </article>
    </div>
  )
}

export default PersonProfile
