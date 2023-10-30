import { Link } from "react-router-dom";

function ContactsList({ contacts }) {
  return (
    <div className="menuRight">
      <h1 className="headerRight">My Contacts</h1>
      {!contacts ? (
        <p>Loading...</p>
      ) : (
        contacts.map((contact, idx) => (
          <div key={contact.id} className="contactItem">
            <div className="contactDetails">
              <p>{contact.name}</p>
              <Link to={`/contact-list/${idx}`} state={{ contact }}>
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactsList;
