import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactCreate(props) {
  const { data, setData } = props;

  // Initialize the nextId state to 15
  const [nextId, setNextId] = useState(15);

  const navigate = useNavigate();

  const initialData = {
    id: '', // The id will be assigned upon form submission
    firstName: '',
    lastName: '',
    city: '',
    state: ''
  };

  const [createContact, setCreateContact] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      ...createContact,
      id: nextId 
    };

    setData([...data, newContact]);

    setNextId(nextId + 1);

    setCreateContact({
      ...initialData,
      id: ''
    });
    navigate('/')
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
