import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function ContactDetail() {
  const [contactToDisplay, setContactToDisplay] = useState({});
  const contactId = Number(useParams().id);

  useEffect(() => {
    const url = `https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`;
    const getData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setContactToDisplay(json);
    };
    getData();
  }, [contactId]);

  return (
    <div className='detail-card' style={{backgroundColor: `${contactToDisplay.favouriteColour}` }}>
      
      <img src={contactToDisplay.profileImage} />
      <h2>
        {contactToDisplay.firstName} {contactToDisplay.lastName}
      </h2>
      <p>
        {contactToDisplay.street}, {contactToDisplay.city}
      </p>
      <p>Gender: {contactToDisplay.gender}</p>
      <p>email: {contactToDisplay.email}</p>
      <p>Occupation: {contactToDisplay.jobTitle}</p>
      <p>Latitude: {contactToDisplay.latitude}</p>
      <p>Longitude: {contactToDisplay.longitude}</p>
      <Link to={`/contact-list/edit/${contactId}`}><button>Edit</button></Link>
    </div>
  );
}
