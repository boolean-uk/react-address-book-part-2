import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../Api";

export default function ContactPage() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  const { contactId } = useParams();
  const navigate = useNavigate();

  // on load: fetch articles
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/contact/${contactId}`);
      if (error === null) {
        setContact(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [contactId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <h1>
            {contact.firstName} {contact.lastName}
          </h1>
          <p>Email: {contact.email}</p>
          <p>City: {contact.street}</p>
          <button onClick={() => navigate(`/contacts/${contact.id}/edit`)}>
            Edit
          </button>
        </>
      )}
    </>
  );
}
