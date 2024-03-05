import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
  const [contact, setContact] = useState();
  const [pending, setPending] = useState(false);
  const { id } = useParams()
  const navigator = useNavigate()

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, []);

  
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value
    const name = e.target.name 
      
    setContact({...contact, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPending(true)
    fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
      })
      .then(() => {
        setPending(false)
        navigator(`/contact/${id}`)
      });
  };

  if (!contact) {
    return (<div>Loading...</div>)
  }

  return (
    <main>
      <h1>Update Contact</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <ul>
            <label>First Name</label>
          </ul>
          <ul>
            <input
              type="firstName"
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>Last Name</label>
          </ul>
          <ul>
            <input
              type="lastName"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>Street</label>
          </ul>
          <ul>
            <input
              type="street"
              name="street"
              value={contact.street}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>City</label>
          </ul>
          <ul>
            <input
              type="city"
              name="city"
              value={contact.city}
              onChange={handleChange}
            />
          </ul>
        </div>
        {!pending && <input className="form__submit" type="submit" value="Update Contact" />}
        {pending && <button>Updating...</button>}
        
      </form>
    </main>
  );
};

export default UpdateContact;
