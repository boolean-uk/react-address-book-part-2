import { useContext, useEffect, useState } from "react"
import { ContactContext } from "../App"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

const ContactView = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    });

    // Get the contacts from the context
    const { deleteContact, contacts } = useContext(ContactContext)

    // Get navigation to navigate back to contact list if deletion is successfull
    const navigate = useNavigate();

    // Get the id from the url
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            const contact = contacts.find((contact) => Number(contact.id) === Number(id));
            if (contact !== undefined){
                setContact(contact);
            }
        }
    }, [id, contacts])


    // Handle the edit process
    const handleEdit = () => {
        navigate(`/edit-contact/${id}`)
    }

    // Handle the deletion process, including deleting, navigating and reporting errors.
    const handleDelete = () => {
        axios
        .delete(`https://boolean-uk-api-server.fly.dev/Ic4rus90/contact/${id}`)
        .then((res) => {
            console.log("Contact deleted: ", res.data);
            deleteContact(Number(id));
            navigate("/");
        })
        .catch((err) => {
            console.error("Error deleting contact:", err);
        });
    };

    return (
        <div>
            <ul>
                <li>
                    id: {contact.id}
                </li>
                <li>
                    First name: {contact.firstName}
                </li>
                <li>
                    Last name: {contact.lastName}
                </li>
                <li> 
                    Gender: {contact.gender}
                </li>
                <li>
                    Email: {contact.email}
                </li>
                <li>
                    Job Title: {contact.jobTitle}
                </li>
                <li>
                    Street: {contact.street}
                </li>
                <li>
                    City: {contact.city}
                </li>
                <li>
                    Latitude: {contact.latitude}
                </li>
                <li>
                    Longitude: {contact.longitude}
                </li>
                <li>
                    Favorite color: {contact.favouriteColour}
                </li>
                <li>Profile image: 
                    <img
                    src={`${contact.profileImage}`}
                    ></img>
                </li>
                <li>
                    <button onClick={handleEdit}>Edit Contact </button>
                </li>
                <li>
                    <button onClick={handleDelete}> Delete Contact </button>
                </li>
            </ul>
        </div>
    )
}

export default ContactView