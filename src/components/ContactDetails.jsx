import { useNavigate } from "react-router-dom";

function ContactDetails(props) {
  const { contact, deleteContact } = props;
  const navigate = useNavigate();
  function onDelete() {
    deleteContact(contact.id);
    navigate("/contacts");
  }
  function onEdit() {
    navigate(`/contacts/${contact.id}/edit`);
  }
  return (
    <div className="person-detail">
      <div
        className="image"
        style={{
          borderColor: contact.favouriteColour,
        }}
      >
        <img
          src={contact.profileImage}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <h2>{contact.firstName + " " + contact.lastName}</h2>
      <ul className={"detail-list"} style={{ listStyleType: "none" }}>
        <li className="detail-row">
          <p>City:</p> <p>{contact.city}</p>
        </li>
        <li className="detail-row">
          <p>Street: </p> <p>{contact.street}</p>
        </li>
        <li className="detail-row">
          <p>Gender: </p> <p>{contact.gender ? contact.gender : " - "}</p>
        </li>
        <li className="detail-row">
          <p>Job Title: </p>{" "}
          <p>{contact.jobTitle ? contact.jobTitle : " - "}</p>
        </li>
        <li className="detail-row">
          <p>Email:</p> <p> {contact.email ? contact.email : " - "}</p>
        </li>
      </ul>
      <iframe
        width="100%"
        height="250"
        src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}
      />

      <button onClick={onEdit}>Edit</button>

      <button onClick={onDelete}> Delete</button>
    </div>
  );
}
export default ContactDetails;
