import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function EditContact(props) {

  const [contact, setContact] = useState({});
  const { id } = useParams();
  const { contacts } = props;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
  });

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`)
      .then(response => response.json())
      .then(data => {
        setContact(data);
        setForm({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          street: data.street || '',
          city: data.city || '',
        });
      });
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create contact');
      }
      return response.json();
    })
    .then(data => {
      console.log("Contact created! Response body: ", data);
      // You may want to update your UI or perform other actions based on the response
    })
    .then(() => navigate("/"))
    .catch(error => {
      console.error('Error creating contact:', error);
      // You may want to display an error message to the user
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };


  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1>Edit Contact</h1>
        <form>
        <label htmlFor="firstName">First name:</label><br/>
        <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange}/><br/>
        <label htmlFor="lastName">Last name:</label><br/>
        <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange}/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" name="email" value={form.email} onChange={handleChange}/><br/>
        <label htmlFor="street">Street:</label><br/>
        <input type="text" id="street" name="street" value={form.street} onChange={handleChange}/><br/>
        <label htmlFor="city">City:</label><br/>
        <input type="text" id="city" name="city" value={form.city} onChange={handleChange}/><br/>
        <div onClick={handleSubmit} style={styles.button}>
          Save Contact
        </div>
        <div onClick={() => navigate("/")} style={styles.button}>
          Dashboard
        </div>
      </form>
      </div>
    </div>
  )
}

const styles = {
  pageContainer: { 
    background: 'lightblue',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    borderRadius: 5,
  },
};

