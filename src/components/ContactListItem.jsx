import { Link } from "react-router-dom";

function ContactListItem({ contact }) {
  return (
    <>
      <nav>
        <li>
          <h3>
            <Link to={`/contacts/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </h3>
        </li>
      </nav>
    </>
  );
}

export default ContactListItem;
