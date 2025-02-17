function PeopleListItem({person}) {
  
    return (
      <li>
        <h3>
          {person.firstName} {person.lastName}
        </h3>
      </li>
    )
  }
  
  export default PeopleListItem