import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bin from "../../_assets/Icons/bin.svg";
import editContact from "../../_assets/Icons/edit.svg";

export default function ViewContact({
  allContacts,
  setAllContacts,
}) {
  const urlParams = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: '', 
    lastName: '',
    street: '',
    city: ''
})

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/contact/${urlParams.id}`
    )
      .then((response) => response.json())
      .then((response) => setContact(response));
  }, [urlParams, setContact]);

  const removeUser = () => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/contact/${urlParams.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setAllContacts(
          allContacts.filter((item) => {
            if (item.id !== response.id) return item;
          })
        );
      });

    navigate("/contact-list");
  };

  return (
    <section className="contact-details">
      <Link to={`/update/${contact.id}`} state={contact}><img src={editContact} className="icon" id="edit" alt="edit contact"/></Link>
      <img
        src={bin}
        className="icon"
        id="bin"
        onClick={removeUser}
        alt="remove contact"
      />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <img src={contact.profileImage}/>
      <p>
        {contact.street}, {contact.city}
      </p>
      <p>Email: {contact.email}</p>
    </section>
  );
}
