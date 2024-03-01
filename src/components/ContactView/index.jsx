import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

function ContactView({ contacts, handleDelete }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((p) => parseInt(p.id) === parseInt(id)));
    }
  }, [contacts, id]);

  var style = {
    border: `5px solid ${contact.favouriteColour}`,
  };
  var image = `https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&hl=es;&output=embed`;

  if (!contact) return <p>Loading...</p>;

  return (
    <article>
      <img
        style={style}
        src={contact.profileImage}
        height="200px"
        width="200px"
      ></img>
      <iframe src={image}></iframe>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street} {contact.city}
      </p>
      <p>
        Long: {contact.longitude} Lat: {contact.latitude}
      </p>
      <p>Gender: {contact.gender}</p>
      <p>Email: {contact.email}</p>
      <p>Job: {contact.jobTitle}</p>
      <button
        className="del-button"
        onClick={(e) => {
          e.preventDefault();
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <div className="update-button">
        <Link to={`/update/${contact.id}`}>Update</Link>
      </div>
    </article>
  );
}

ContactView.propTypes = {
  contacts: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default ContactView;
