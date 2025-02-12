import { useContext, useState, useEffect} from "react";
import { ContactContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

function PersonProfile() {
    const { contactList, setUpdate } = useContext(ContactContext)
    const { id } = useParams();
    const [person, setPerson] = useState(null)
    const navigate = useNavigate()

    function handleUpdateClick(event){
        event.preventDefault();
        navigate("/updateContact/"+id)
    }
    function handleDeleteClick(event)
    {
        event.preventDefault();
        console.log("Clicked")
        fetch('https://boolean-uk-api-server.fly.dev/1Bergvall/contact/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        setUpdate(true);
        navigate("/");
    }
    useEffect(() => {
        if (contactList && id) {
            setPerson(contactList.find((people) => Number(people.id) === Number(id)));
        }
    }, [contactList, id]);

    if (!person) return <p>Loading...</p>
    return (
        <article>
            <h2>
                {person.firstName} {person.lastName}
            </h2>
            <p>{person.street} {person.city}</p>
            <button onClick={handleUpdateClick}>Update</button>
            <button onClick={handleDeleteClick}>Delete</button>
            
        </article>
    )
}

export default PersonProfile