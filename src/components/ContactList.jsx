import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function ContactList(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://boolean-api-server.fly.dev/jdm1991/contact')
        if (!response.ok) {
          window.alert("Network error");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {window.alert(error.message)
}
    };
    fetchData();
  }, []);

  const remove = (id) => {
    const options = { method: 'DELETE' };

    fetch(`https://boolean-api-server.fly.dev/jdm1991/contact/${id}`, options)
        .then(response => {
            if (!response.ok) {
                window.alert('Network response failed');
            }
            return response.json();
        })
        .then(() => {
            setData(data.filter(contact => contact.id !== id));
        })
        .catch(error => {
           window.alert('Fetch is not working');
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
            <button className="delete-button" onClick={() => remove(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}