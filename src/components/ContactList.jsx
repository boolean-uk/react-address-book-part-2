import ContactItem from "./ContactItem";
import { useEffect, useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState(0);

  const getData = async () => {
    const data = await fetch(
      "https://boolean-api-server.fly.dev/MrStashy/contact"
    );
    const json = await data.json();
    setContacts(json);
  };

  useEffect(() => {
    getData();
  }, []);

  function handleChange (e) {
        setFilter(e.target.value)
  }

  return (
    <>
      <h2 className='text-4xl'>Contacts</h2>
        <label htmlFor='filter'>Filter Contacts  </label>
        <select onChange={handleChange} name='filter'>
            <option value=''>Choose...</option>
            <option value='northernHemisphere'>Northern Hemisphere</option>
            <option value='southernHemisphere'>Southern Hemisphere</option>
        </select>
        <div className='contact-list flex-col flex gap-3 rounded-md bg-outrun-blue p-4 my-4'>
      {contacts.map((contact, index) => {
        if (!filter) {
            return <ContactItem key={index} contact={contact} getData={getData} />;  
        }
        if (filter === 'northernHemisphere' && contact.latitude > 0) {
            return <ContactItem key={index} contact={contact} getData={getData} />;  
        } else if (filter === 'southernHemisphere' && contact.latitude < 0) {
            return <ContactItem key={index} contact={contact} getData={getData} />; 
        }
      })}
      </div>
      </>
  );
}
