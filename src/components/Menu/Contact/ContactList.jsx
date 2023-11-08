import { Link } from "react-router-dom";

function ContactList(props) {
  const { data } = props;

  return (
    <div className="contact-list">
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            <h3>
              {person.firstName} {person.lastName}
            </h3>
            <Link to={`/Contact-List/Contact-List-Item/${person.id}`}>
              See Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
