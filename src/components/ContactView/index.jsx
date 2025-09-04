/* eslint-disable react/prop-types */
import { Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App.jsx"
import { useContext } from "react";

function ContactView() {
  const navigate = useNavigate();
  const { contacts } = useContext(AppContext)
  const { id } = useParams();
  const contact = contacts.find(c => c.id == id)

  if (!contacts) return (<p>Loading...</p>)

  function deleteContact() {
    console.log("DELETING CONTACT")
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact.username)
    };


    fetch(`https://boolean-uk-api-server.fly.dev/fanden/contact/${id}`, requestOptions)
      .then(response => response.json())
      .then(response => console.log(response))
    navigate('/')
  }

  return (
    <article>
      <h2>{contact.firstName + " " + contact.lastName}</h2>
      <img src={contact.profileImage}/>
      {/* I didn't feel like making a new component here */}
      {Object.entries(contact).map(([key, value]) => {
        if (['firstName', 'lastName', 'profileImage', 'id', 'latitude', 'longitude'].includes(key)) return null;
        return (
          <div key={key}>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
            <span>{typeof value === 'object' ? JSON.stringify(value) : value}</span>
          </div>);
      })}

      <button onClick={deleteContact}>Delete</button><br></br>

      <Link to="/">Back</Link><br></br>


    </article>

  )
}

export default ContactView
