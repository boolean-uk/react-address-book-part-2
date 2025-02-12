import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link, useNavigate, useParams } from "react-router-dom";


function ViewContact(){
    const { contacts, setContacts } = useContext(MyContext)
    const navigate = useNavigate()
    const { id } = useParams()
    const [person, setPerson] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact`)
          .then((res) => res.json())
          .then((data) => setContacts(data));
      }, []);
    
    useEffect(() => {
        if(contacts && id){
            const matchingPerson = contacts.find((person) => {
              return Number(person.id) === Number(id)
            })
            setPerson(matchingPerson)
        }
      }, [contacts, id])
    
      if (!person) return <p>Loading...</p>


      const handleDelete = (event) => {
        event.preventDefault();
    
        fetch(`https://boolean-uk-api-server.fly.dev/hedbom98/contact/${id}`, {
          method: "DELETE",
        });
    
        navigate("/contacts");
      };








    return(
        <div>
            <h3>Contact</h3>
            <p>Name: {person.firstName} {person.lastName}</p>
            <p>Email: {person.email}</p>
            <p>City: {person.city}</p>
            <p>Street: {person.street}</p>
            <p>Gender: {person.gender}</p>
            <p>Job title: {person.jobTitle}</p>
            <p>Favourite Colour: {person.favouriteColour}</p>
            <p>Latitude: {person.latitude}</p>
            <p>Longitude: {person.longitude}</p>
            <img src={person.profileImage}/>
            <button onClick={handleDelete}>Delete Contact</button>
            <Link to={`/contacts/view/${id}/edit`}><button>Edit Contact</button></Link>
        </div>
    );
}

export default ViewContact