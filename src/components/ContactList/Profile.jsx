import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Profile(props) {
  const [profilePerson, setProfilePerson] = useState(null);
  const { contacts, setContacts } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteContact = (event) => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/contacts");
  };

  useEffect(() => {
    if (contacts && id) {
      setProfilePerson(contacts.find((item) => Number(item.id) === Number(id)));
    }
  }, [contacts, id]);

  console.log(id);

  return (
    <div>
      {profilePerson ? (
        <div className="container">
          <div className="left">
            <h2>
              {profilePerson.firstName} {profilePerson.lastName}
            </h2>
            <p>
              {profilePerson.street}, {profilePerson.city}
            </p>
            <Link to={`/contacts/${id}/update`}>Update contact</Link>
            <br></br>
            <button onClick={() => deleteContact()}>DELETE CONTACT</button>
          </div>
          <div className="right">
            <iframe
              width="300"
              height="350"
              src={`https://maps.google.com/maps?q=${profilePerson.latitude}, ${profilePerson.longitude}&output=embed&z=4`}
            ></iframe>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
export default Profile;
