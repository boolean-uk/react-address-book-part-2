import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function ContactView({contacts, contact, setContact, deleteContact}){
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(contacts && id){
            const matchingContact = contacts.find((contact) => contact.id === parseInt(id, 10))
            setContact(matchingContact)
        }
    }, [contact, id])

    function handleDelete(){
        deleteContact(id)
        navigate("/")
    }
   
    if(!contact){
        return <p>No such contact</p>
    }

    return(
        <main>
            <article>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>City: {contact.city}</p>
                <p>Street: {contact.street}</p>
            </article>
            <button onClick={handleDelete}>Delete</button>
            <Link to="/EditForm"><button>Edit</button></Link>
        </main>
    )
}

export default ContactView