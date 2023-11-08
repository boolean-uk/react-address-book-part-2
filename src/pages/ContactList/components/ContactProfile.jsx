import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactProfile = (props) => {
  const [contact, setContact] = useState(null);

  const { contacts, setRefresh } = props;

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const deleteContact = () => {
    const opts = {
      method: "DELETE",
    };

    fetch(`https://boolean-api-server.fly.dev/yee0802/contact/${id}`, opts)
      .then((res) => res.json())
      .then(() => {
        setRefresh(true);
        navigate("/contacts");
      });
  };

  useEffect(() => {
    const currentContact = contacts.find(
      (contact) => contact.id === Number(id)
    );
    setContact(currentContact);
  }, [contacts, id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="contact-profile container">
      <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
      <div className="contact-details-container">
        <div className="contact-details">
          <p>
            <b>Gender</b>: {contact.gender}
          </p>
          <p>
            <b>Address</b>: {`${contact.street}, ${contact.city} `}
          </p>
          <p>
            <b>Job</b>: {contact.jobTitle}
          </p>
          <p>
            <b>Email</b>: {contact.email}
          </p>
          <div className="buttons">
            <button className="delete-btn" onClick={deleteContact}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;
