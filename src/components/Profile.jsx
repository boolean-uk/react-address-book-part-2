import { useContext } from "react";
import { ContactContext } from "../App";
import { useParams, useNavigate } from 'react-router-dom'


function Profile() {
    const { contacts, url, setContacts } = useContext(ContactContext)
    const { id } = useParams();
      const navigate = useNavigate();

    const contact = contacts[id];
    

    const deleteUser = (e) => {
        e.preventDefault()
        console.log("delete user")

        const deleteData = async () => {
            await fetch(url+'/' + contact.id, { method:'DELETE' });};
        deleteData();
        setContacts(prev => prev.filter((c) => c.id !== contact.id))
        navigate('/')

    }

    return <>
    <div>

        <h2>{contact.firstName + " " + contact.lastName} </h2>
        <p>{contact.street + " " + contact.city}</p>
            <button onClick={deleteUser}>Delete</button>
    </div>
    <div>{contact.gender}</div>
        <div>{contact.email}</div>
            <div>{contact.jobTitle}</div>
                <div>{contact.favouriteColour}</div>
                    <img
                    src={contact.profileImage}
                    />




    </>
}

export default Profile;