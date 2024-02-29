import { Link } from "react-router-dom";

function ContactListPage({ contacts }) {
  return (
    <>
      <section className="contact-list-box">
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li className="contact-list-item" key={index}>
              {contact.firstName} {contact.lastName}
              <Link to={`/contacts/${contact.id}`} className="view-button">
                View
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ContactListPage;
