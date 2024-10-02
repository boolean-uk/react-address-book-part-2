function ContactDetails(props) {
  const person = props.people.find((person) => person.id === props.currentId);
  return (
    <div className="person-details">
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <p>{person.street}</p>
      <p>{person.city}</p>
    </div>
  );
}

export default ContactDetails;
