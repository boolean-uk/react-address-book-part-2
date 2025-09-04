import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../App";

function Contact({contact, id}) {
        const {url, setContacts}  = useContext(ContactContext)
              const navigate = useNavigate();
        
    

    const deleteUser = (e) => {
        e.preventDefault()
        console.log("delete user")

        const deleteData = async () => {
            await fetch(url+'/' + contact.id, { method:'DELETE' });};
        deleteData();
        setContacts(prev => prev.filter((c) => c.id !== contact.id))
    }

    const editUser = (e) => {
        e.preventDefault();
        navigate(`/profile/${contact.id}/update`)
    }

    return <>
    <p>{contact.firstName + " " + contact.lastName}</p>
    <Link to={`/profile/${id}`}><p>View</p></Link>

    <button onClick={editUser}>Edit</button>

    <button onClick={deleteUser}>Delete</button>
    </>
}

export default Contact;