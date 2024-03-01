import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactDetailsPage(props) {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    favouriteColour: "",
    profileImage: "",
    id: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const contact = props.contactInfoList.find((c) => c.id === parseInt(id));
    setContactInfo(contact);
  }, [id, props.contactInfoList]);

  if (!contactInfo) return <p>Loading...</p>;

  return (
    <div style={{ background: contactInfo.favouriteColour }}>
      <h2 className="margin-left">Contact Details</h2>
      <img className="margin-left" src={contactInfo.profileImage} />
      <ul>
        <li className="contact no-list-style">
          First Name: {contactInfo.firstName}
        </li>
        <li className="contact no-list-style">
          Last Name: {contactInfo.lastName}
        </li>
        <li className="contact no-list-style">Email: {contactInfo.email}</li>
        <li className="contact no-list-style">Street: {contactInfo.street}</li>
        <li className="contact no-list-style">City: {contactInfo.city}</li>
        <li className="contact no-list-style">ID: {contactInfo.id}</li>
      </ul>
    </div>
  );
}
export default ContactDetailsPage;

ContactDetailsPage.propTypes = {
  contactsListPage: PropTypes.arrayOf(PropTypes.object),
};
