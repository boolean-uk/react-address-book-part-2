import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactProfile(props) {
    const [person, setPerson] = useState(null)

  const {id} = useParams();
  const{ contacts, setContacts } = props;

  console.log("test", person)

  useEffect(() => {
    console.log("Contacts:", contacts);
    console.log("ID:", id);

    if (contacts && id) {
      setPerson(contacts.find((person) => Number(person.id) === Number(id)));
    }
  }, [contacts, id]);


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <p><strong>Gender:</strong> {person.gender}</p>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>City:</strong> {person.city}</p>
      <p><strong>Street:</strong> {person.street}</p>
      
    </article>
  )
}


export default ContactProfile