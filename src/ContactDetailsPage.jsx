import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactDetailsPage(props) {
  const [contactInfo, setContactInfo] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const contact = props.contactInfoList.find((c) => c.id === parseInt(id));
    setContactInfo(contact);
  }, [id, props.contactInfoList]);

  if (!contactInfo) return <p>Loading...</p>;

  function deleteContactAndRedirect(event) {
    event.preventDefault();
    console.log(`delete ${contactInfo.firstName} ${contactInfo.lastName}`);
    const DeleteRequestData = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://boolean-api-server.fly.dev/MackanPalm/contact/${contactInfo.id}`,
      DeleteRequestData
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("DELEATED:", data);
      })
      .catch((error) => {
        console.error("not able to delete data", error);
      });

    navigate("/");
  }

  return (
    <div
      style={{ background: contactInfo.favouriteColour }}
      className="contact-details-box"
    >
      <h2 className="margin-left">Contact Details</h2>
      <img className="margin-left" src={contactInfo.profileImage} />
      <ul>
        <li className="contact no-list-style">
          First Name: {contactInfo.firstName}
        </li>
        <li className="contact no-list-style">
          Last Name: {contactInfo.lastName}
        </li>
        <li className="contact no-list-style">Street: {contactInfo.street}</li>
        <li className="contact no-list-style">City: {contactInfo.city}</li>
        <li className="contact no-list-style">Gender: {contactInfo.gender}</li>
        <li className="contact no-list-style">Email: {contactInfo.email}</li>
        <li className="contact no-list-style">
          Job Title: {contactInfo.jobTitle}
        </li>
        <li className="contact no-list-style">
          Latitude: {contactInfo.latitude}
        </li>
        <li className="contact no-list-style">
          Longitude: {contactInfo.longitude}
        </li>
        <li className="contact no-list-style">
          Favourite Colour: {contactInfo.favouriteColour}
        </li>
        <li className="contact no-list-style">
          Profile Image: {contactInfo.profileImage}
        </li>
        <li className="contact no-list-style">ID: {contactInfo.id}</li>
      </ul>
      <section>
        <button onClick={deleteContactAndRedirect}>Delete contact</button>
      </section>
    </div>
  );
}
export default ContactDetailsPage;

ContactDetailsPage.propTypes = {
  contactInfoList: PropTypes.arrayOf(PropTypes.object),
};
