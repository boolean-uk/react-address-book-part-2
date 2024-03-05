import { Link, useNavigate, useParams } from "react-router-dom";

function ContactProfile(props) {
  const { contacts, setContacts } = props;
  const { id } = useParams();

  const contact = contacts.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();

  if (!contact) {
    return <p>Contact not found</p>;
  }

  const deleteContact = () => {
    fetch(`https://boolean-api-server.fly.dev/espensolhaug1/contact/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setContacts(contacts.filter((c) => c.id !== parseInt(id))))
      .then((res) => console.log(res));
    navigate("/contacts"); //redirects to contact, the data is not updated before refresh
  };

  return (
    <div>
      <h3 style={{ width: "20%", marginLeft: "15px" }}>
        {contact.firstName} {contact.lastName}
      </h3>
      <hr
        className="rounded"
        style={{ width: "20%", display: "inline-flex" }}
      />
      <div style={{ display: "flex" }}>
        <section
          style={{
            background: contact.favouriteColour,
            padding: "10px",
            marginLeft: "15px",
          }}
        >
          <p>
            <strong>Job Title:</strong> {contact.jobTitle}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Gender:</strong> {contact.gender}
          </p>
          <p>
            <strong>Address:</strong> {contact.street}, {contact.city}
          </p>
          <p>
            <strong>Lat:</strong> {contact.latitude}, <strong>Lng:</strong>{" "}
            {contact.longitude}
          </p>
          <img
            style={{ border: "2px solid black" }}
            src={contact.profileImage}
          ></img>
        </section>
        <section style={{ padding: "5px" }}>
          <div>
            <Link to={`/contacts/${id}/update`}>Update Contacts</Link>
            <button
              style={{
                background: "white!important",
                border: "0px solid black",
                padding: "0!important",
                color: "#069",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={deleteContact}
            >
              Delete Contact
            </button>
          </div>
          <iframe
            width="100%"
            height="450"
            src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed&z=4`}
          ></iframe>
        </section>
      </div>
    </div>
  );
}

export default ContactProfile;
