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

  if (!contact) return <p>Loading...</p>;

  var style = {
    border: `5px solid ${contact.favouriteColour}`,
  };
  var image = `https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&hl=es;&output=embed`;

  return (
    <div className="parent">
      <article>
        <img
          className="profile-picture"
          style={style}
          src={contact.profileImage}
          height="200px"
          width="200px"
        ></img>
        <iframe className="map" src={image}></iframe>
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
        <div className="view-actions">
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
        </div>
      </article>
    </div>
  );
}

ContactView.propTypes = {
  contacts: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default ContactView;
