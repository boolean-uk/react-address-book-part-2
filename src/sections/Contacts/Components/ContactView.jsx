import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ContactContext } from "../../../App";

function ContactView() {
  const context = useContext(ContactContext);
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  const { id } = useParams();
  const thisContact = context.contacts.find((x) => x.id == id);

  useEffect(() => {
    setContact(thisContact);
  }, [context.contacts]);

  const handleDelete = async () => {
    if (thisContact) {
      const response = await fetch(`${context.url}/${id}`, {
        method: "DELETE",
      });

      console.log("Deleted", response);
    }
    navigate("/");
  };

  return (
    <section>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street} {contact.city}
      </p>
      <button className="update-button"><Link to={`/contacts/update/${id}`}>Update Contact</Link></button>
      <button onClick={handleDelete}>Delete Contact</button>
    </section>
  );
}

export default ContactView;
