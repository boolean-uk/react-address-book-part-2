import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ContactList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/SukunimiVinod1/contact');
        if (!response.ok) {
          window.alert("Network error");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        window.alert(error.message);
      }
    };

    fetchData();
  }, []);

  const removeContact = (id) => {
    const options = { method: 'DELETE' };

    fetch(`https://boolean-api-server.fly.dev/SukunimiVinod1/contact/${id}`, options)
      .then(response => {
        if (!response.ok) {
          window.alert('Network response failed');
        }
        return response.json();
      })
      .then(() => {
        setData(prevData => prevData.filter(contact => contact.id !== id));
      })
      .catch(error => {
        console.error('Error removing contact:', error);
        window.alert('Error removing contact: ' + error.message);
      });
  };

  return (
    <>
      <header>
        <h2 className='contacts-title'>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {data.map((contact) => (
          <li className="contact" key={contact.id}>
            <p>
              Name: {contact.firstName} {contact.lastName}
            </p>
            <p>
              <Link to={`/contacts/${contact.id}`}>View</Link>
            </p>
            <button className="delete-button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
