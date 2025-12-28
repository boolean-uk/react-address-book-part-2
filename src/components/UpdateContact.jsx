import { useState, useEffect } from "react"

function UpdateContact({data, update}) {
    const [id, setId] = useState("");  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
    if (id === "") return;

    const person = data.find(p => p.id === Number(id));
    if (person) {
      setFirstName(person.firstName);
      setLastName(person.lastName);
      setStreet(person.street);
      setCity(person.city);
    } else {
      // Hvis ingen person med den ID-en finnes, tøm feltene
      setFirstName("");
      setLastName("");
      setStreet("");
      setCity("");
    }
  }, [id, data]);

    async function handleSubmit(event) {
    event.preventDefault();

    const updateContact = { id: Number(id), firstName, lastName, street, city };

    await update(updateContact);

    setId("");
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
  }
    
  return (
    <><h3> Update Contact</h3>
        <form onSubmit={handleSubmit}>

            <label htmlFor="id">Please type ID for update contact:</label>
            <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} required/>

            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}  />

            <label htmlFor="street">Street:</label>
            <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)}  />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}  />

            <button type="submit">Update</button>
      </form></>
  )
}

export default UpdateContact
