import { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import ContactChange from "./ContactChange";

function ContactProfile(props) {
    
    const [person, setPerson] = useState(null)
    const navigate = useNavigate();

    const {id} = useParams();
    const{ contacts, setContacts } = props;

    const handleDelete = () => {
        fetch(`https://boolean-api-server.fly.dev/StevenTPh/contact/${id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            },
        });
        navigate(-1)
        }

    useEffect(() => {

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
        <button type="submit" onClick={handleDelete} >Deloto centect</button>

        <Link to={`/change/${person.id}`}>change</Link>


    </article>

  )
}


export default ContactProfile