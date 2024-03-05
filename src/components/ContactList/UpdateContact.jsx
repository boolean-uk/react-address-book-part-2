import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateContact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [favouriteColour, setFavouriteColour] = useState("");

  const [updateContact, setUpdateContact] = useState({});

  const { contacts, setContacts } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  const match = contacts.find((item) => Number(item.id) === Number(id));

  useEffect(() => {
    setUpdateContact(match);
  }, [match]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Update the fields
    updateContact.firstName = firstName;
    updateContact.lastName = lastName;
    updateContact.street = street;
    updateContact.city = city;
    updateContact.gender = gender;
    updateContact.email = email;
    updateContact.jobTitle = jobTitle;
    updateContact.longitude = Number(longitude);
    updateContact.latitude = Number(latitude);
    updateContact.favouriteColour = favouriteColour;
    console.log(updateContact);

    fetch(`https://boolean-api-server.fly.dev/knutsr0501/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateContact),
    });

    navigate(`/contacts/${id}`);
  };

  return (
    <div>
      {updateContact ? (
        <h2>
          {updateContact.firstName} {updateContact.lastName}
        </h2>
      ) : (
        <p>Loading profile...</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Edit firstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br></br>

        <label htmlFor="lastName">Edit last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br></br>
        <label htmlFor="street">Edit street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <br></br>
        <label htmlFor="city">Edit city</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br></br>
        <label htmlFor="gender">Edit gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br></br>
        <label htmlFor="email">Edit email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="jobTitle">Edit job title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <br></br>
        <label htmlFor="longitude">Edit longitude</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <br></br>
        <label htmlFor="latitude">Edit latitude</label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <br></br>
        <label htmlFor="favouriteColour">Edit favourite colour</label>
        <input
          type="text"
          id="favouriteColour"
          name="favouriteColour"
          value={favouriteColour}
          onChange={(e) => setFavouriteColour(e.target.value)}
        />

        <input type="submit" value="Submit changes" />
      </form>
    </div>
  );
}
export default UpdateContact;
