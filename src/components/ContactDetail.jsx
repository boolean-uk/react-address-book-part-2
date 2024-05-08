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
    <div
      className="detail-card p-5 rounded-md flex flex-col gap-5"
      style={{ backgroundColor: `${contactToDisplay.favouriteColour}` }}
    >
      <img width={100} src={contactToDisplay.profileImage} />
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
      <iframe
        src={`http://maps.google.com/maps?q=${contactToDisplay.longitude},${contactToDisplay.latitude}&z=16&output=embed`}
        height="400"
        width="400"
      ></iframe>{" "}
      <br />
      <Link to={`/contact-list/edit/${contactId}`}>
        <button className="bg-outrun-blue w-20 text-outrun-pink rounded-full">Edit</button>
      </Link>
    </div>
  );
}
