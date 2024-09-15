import PropTypes from "prop-types";
import Datapoint from "../../ui/common/Datapoint";
import { Link } from "react-router-dom";

function ContactDetails({ contact }) {
  return (
    <div className="contact-details">
      <div className="image-column">
        <img
          id="profile-image"
          src={contact.profileImage}
          alt={`${contact.firstName} ${contact.lastName}`}
        />
      </div>
      <div className="unit-profile-array">
        <div
          className="unit-profile-header"
          style={{ borderBottom: `7.5px solid ${contact.favouriteColour}` }}
        >
          <h2 id="name">{`${contact.firstName} ${contact.lastName}`}</h2>
          <Link to="edit" className="form-button">
            Edit
          </Link>
        </div>
        <Datapoint label="Email" value={contact.email} />
        <Datapoint label="Gender" value={contact.gender} />
        <Datapoint label="Job title" value={contact.jobTitle} />
        <Datapoint label="Street" value={contact.street} />
        <Datapoint label="city" value={contact.city} />
        <Datapoint label="Latitude" value={contact.latitude} />
        <Datapoint label="Longitude" value={contact.longitude} />
        <Datapoint label="Favorite color" value={contact.favouriteColour} />
      </div>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactDetails;
