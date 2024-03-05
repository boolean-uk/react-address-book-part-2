import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getRequest } from "../../Api";

export default function ContactList({ limit }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest("/contact");
      if (data) {
        let finalisedContacts = data;
        if (limit) {
          finalisedContacts = data.filter((contact, index) => index < limit);
        }
        setContacts(finalisedContacts);
      } else {
        console.error("Error fetching contacts:", error);
      }
      setLoading(false);
    };
    runEffect();
  }, [limit]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && contacts.length === 0 && <p>No contacts available.</p>}
      {!loading && (
        <div>
          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <h3>
                  <Link to={`/contacts/${contact.id}`}>
                    {contact.firstName} {contact.lastName}
                  </Link>
                </h3>
                <p>{contact.email}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

ContactList.propTypes = {
  limit: PropTypes.number,
};
