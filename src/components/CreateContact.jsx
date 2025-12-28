import { useState } from "react"

function CreateContact({addContact}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

   async function handleSubmit(event) {
    event.preventDefault();

    const newPerson = { firstName, lastName, street, city };

    // kall funksjonen fra App som sender til API og oppdaterer state
    await addContact(newPerson);

    // tøm feltene
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Contact</h3>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

      <label htmlFor="street">Street:</label>
      <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)} required />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
     
      <button type ="submit">Create</button>
    </form>
  )
}

export default CreateContact