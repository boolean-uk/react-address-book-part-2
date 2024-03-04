import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  const { contactData, DeletePerson } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPerson(contactData[id]);
  }, [contactData, person, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article style={{ background: person.favouriteColour }}>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <img src={person.profileImage} alt={person.firstName} />
      <p>{person.gender}</p>
      <p>{person.email}</p>
      <p>{person.jobTitle}</p>
      <h3>
        {person.street} {person.city}
      </h3>
      <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${person.latitude}, ${person.longitude}&output=embed`}></iframe>
      <p>Latitude: {person.latitude}</p>
      <p>Longitude:{person.longitude}</p>
      <button
        onClick={() => {
          DeletePerson(person.id);
          navigate("/");
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          navigate(`/edit/${id}`);
        }}
      >
        Update
      </button>
    </article>
  );
}

export default PersonProfile;
