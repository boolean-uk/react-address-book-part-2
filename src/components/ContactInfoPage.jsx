import { useNavigate, useParams } from "react-router-dom";

function ContactInfoPage({ contacts }) {
  //Using parameters get the right contact
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  if (!contact) return <p>Loading...</p>;
  const deleteRequestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  };

  function deleteContact() {
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/contact/${id}`,
      deleteRequestOptions
    ).then((response) => {
      response.json();
      navigate("/contacts");
    });
  }
  return (
    <>
      <section className="contact-list-box">
        <h2>Contact Data</h2>
        <p>
          {contact.firstName} {contact.lastName}
        </p>
        <p>City: {contact.city}</p>
        <p>Street: {contact.street}</p>
        <button onClick={deleteContact}>Delete Contact</button>
      </section>
    </>
  );
}

export default ContactInfoPage;
