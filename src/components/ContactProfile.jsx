import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactProfile = () => {
  const [contact, setContact] = useState();
  const navigator = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, []);

  const handleDelete = (e) => {
    e.preventDefault()

    fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`, {
        method: "DELETE"
    })
    . then(() => {navigator("/contact")})
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    navigator(`/contact/update/${contact.id}`)
  }

  if (!contact) {
    return (<div>Loading...</div>)
  }

  return (
    <main>
      <div>
        <h1>{contact.firstName} {contact.lastName}</h1>
      </div>
      <div>
        <h3>{"Street: "} {contact.street}</h3>
      </div>
      <div>
        <h3>{"City: "} {contact.city}</h3>
      </div>
      <div>
        < button onClick={handleDelete}>Delete</button>
        < button onClick={handleUpdate}>Update</button>
      </div>
    </main>
  );
};

export default ContactProfile;