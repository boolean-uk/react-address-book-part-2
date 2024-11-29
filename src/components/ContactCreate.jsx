import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactCreate(props) {
  const { setData } = props;

  const navigate = useNavigate();

const initialData = {
  id: '',
  firstName: '',
  lastName: '',
  city: '',
  state: '',
  street: '', 
};

  const [createContact, setCreateContact] = useState(initialData);

  const handleSubmit = (event) => {
  event.preventDefault();

const newContact = {
  firstName: createContact.firstName,
  lastName: createContact.lastName,
  city: createContact.city,
  state: createContact.state,
  street: createContact.street,
};


 fetch('https://boolean-api-server.fly.dev/ateeb020301/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newContact),
})
.then(response => {
  if (!response.ok) {
    return response.json().then(errorData => {
      console.error('Detailed error message:', errorData);
      throw new Error('Network response was not ok');
    });
  }
  return response.json();
})
.then(data => {
  setData(currentData => [...currentData, data]);
  setCreateContact(initialData);
  navigate('/');
})
.catch(error => {
  console.error('Error creating contact:', error);
});

};


  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreateContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={createContact.firstName}
        required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={createContact.lastName}
        required
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={createContact.city}
        required
        />
        <br />
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={handleChange}
          value={createContact.street}
          required
        />
        <br />
        <label htmlFor="state">State:</label>
        <input
        type="text"
        id="state"
        name="state"
        onChange={handleChange}
        value={createContact.state}
        required
        />
       
        <br />
        <button type="submit">Create Contact</button>
    </form>
  );
}
