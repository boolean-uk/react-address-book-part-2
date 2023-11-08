import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function ContactDetails({ theContactData, theUrl, setFetchData }) {
  const [theDisplayPerson, setTheDisplayPerson] = useState(null);
  const navigator = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id && theContactData) {
      setTheDisplayPerson(
        theContactData.find((person) => Number(person.id) === Number(id))
      );
    }
  }, [id, theContactData]);

  function handleDelete(theDisplayPerson) {
    const options = {
      method: "DELETE",
    };
    fetch(`${theUrl}/${theDisplayPerson.id}`, options)
      .then((response) => response.json())
      .then(() => setFetchData(true));
    navigator("/");
  }

  if (!theDisplayPerson) return <p>Loading...</p>;
  return (
    <section>
      <h2>Contact Information</h2>
      <h3>
        {theDisplayPerson.firstName} {theDisplayPerson.lastName}
      </h3>
      <p>
        {theDisplayPerson.street} {theDisplayPerson.city}
      </p>
      <Link to={`/update__contact/${theDisplayPerson.id}`}>Update Details</Link>
      <button onClick={() => handleDelete(theDisplayPerson)}>
        Delete Contact
      </button>
    </section>
  );
}

export default ContactDetails;
