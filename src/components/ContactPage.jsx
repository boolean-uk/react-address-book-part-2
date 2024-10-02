import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactContext } from "../App";
import { useNavigate } from "react-router-dom";


function ContactPage() {
  const { id } = useParams();
  const { contacts, setContacts } = useContext(ContactContext);
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === parseInt(id));

  function deleteContact() {
    fetch(`https://boolean-uk-api-server.fly.dev/badde00/contact/${contact.id}`, {
      method: "DELETE"
    })
      .then(() => {
        setContacts((prevContacts) => prevContacts.filter(c => c.id !== contact.id));
        navigate("/");
      })
  }

  if (!contact) {
    navigate("/");
  }

  return (
    <>
    <div>
      <Link to={`/edit/${contact.id}`}>Edit</Link>
    </div>
    <div style={{ background: contact.favouriteColour !== "#000000" ? contact.favouriteColour : "#ffffff" }}>
      <h2>{contact.firstName} {contact.lastName}</h2>
      {contact.profileImage && contact.profileImage !== "" && (
        <img src={contact.profileImage} alt={contact.firstName} />
      )}
      {contact.jobTitle && contact.jobTitle !== "" && <p>Job Title: {contact.jobTitle}</p>}
      <p>Location: {contact.street}, {contact.city}</p>
      {(contact.latitude !== 0 && contact.longitude !== 0) && (
        <p>Coordinates: ({contact.latitude}, {contact.longitude})</p>
      )}
      {contact.email && contact.email !== "" && <p>Email: {contact.email}</p>}
    </div>
    <div>
      <button style={{color: "red"}} onClick={deleteContact}>Delete</button>
    </div>
    </>
  );
}

export default ContactPage;