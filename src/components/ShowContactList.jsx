import "./ShowContact.css";
import { Link } from "react-router-dom";
function ShowContactList(props) {
  const { contactlist } = props;

  return (
    <>
      <h1>Contacts</h1>
      {contactlist.map((contact) => (
        <div className="contact-box" key={contact.id}>
          <p>{`${contact.firstName} ${contact.lastName}`}</p>
          <Link to={`/contact/${contact.id}`} state={{ data: contact }}>
            <p>view</p>
          </Link>
          <button on>Delete Contact</button>
        </div>
      ))}
    </>
  );
}

export default ShowContactList;
