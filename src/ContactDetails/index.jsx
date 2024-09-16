import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactDetails(props) {
  const { contacts } = props;

  const [contact, setContact] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setContact(
      contacts.find(
        (contact) => Number(contact.id) === Number(id)
      )
    );
  }, [contacts, id]);

  console.log("In contact details: ", contact, " id= ", id);

  if (!contact) return <p>Loading...</p>;

  return (
    <article>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <p>
        {contact.street}, {contact.city}
      </p>
    </article>
  );
}

export default ContactDetails;
