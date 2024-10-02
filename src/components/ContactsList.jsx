import { Link } from "react-router-dom";

function ContactsList(props) {
  return (
    <div id="contacts-list">
      <h1>Contacts</h1>
      <ul className="people-list">
        {props.people.map((person) => (
          <li className="person" key={person.id}>
            <p>{`${person.firstName} ${person.lastName}`}</p>
            <Link
              onClick={() => {
                props.setCurrentId(person.id);
              }}
              to={`/contacts-list/${person.id}`}
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
