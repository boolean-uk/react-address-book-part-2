import { useParams } from "react-router-dom";

function ContactInfoPage({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  if (!contact) return <p>Loading...</p>;

  return (
    <>
      <section className="contact-list-box">
        <h2>Contact Data</h2>
        <p>
          {contact.firstName} {contact.lastName}
        </p>
        <p>
          {contact.city} : {contact.street}
        </p>
      </section>
    </>
  );
}

export default ContactInfoPage;
