import { Link } from "react-router-dom";

function ContactList({ theContactData }) {
  return (
    <div>
      <h2>Contacts</h2>

      <ul className="contact__list">
        {theContactData.map((person) => (
          <li key={person.id} className="contact__list">
            <h3>
              {person.firstName} {person.lastName}
            </h3>

            <p>
              <Link to={`/contact__list/contact__details/${person.id}`}>
                View
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
