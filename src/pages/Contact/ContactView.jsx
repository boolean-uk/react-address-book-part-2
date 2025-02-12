import { useState, useEffect } from 'react'
import { useContext } from "react"
import { MyContext } from '../../App'
import {useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ContactView() {
    const [contact, setContact] = useState(null)
    const { contacts, setContacts } = useContext(MyContext)
    const navigate = useNavigate()

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`)
        .then((res) => res.json())
        .then((data) => setContacts(data))
         
     },[])

    useEffect(() => {

        if(contacts && id){
            const matchingContact = contacts.find((contact) => {
             return Number(contact.id) === Number(id)
        })
        setContact(matchingContact)
        }
        
    }, [contacts, id])

 if (!contact) return <p>Loading...</p>

 const handleDelete = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact/${contact.id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        
      })
      navigate("/contacts");
}
const handleUpdate = () => {
    navigate(`/contact/update/${contact.id}`)
  }

  return (
        <li>
          <h2 >
          {contact.firstName} {contact.lastName}  
          </h2>
          <h3>
            {contact.street}, {contact.city}
            <br />
            </h3>
            <h4>
            Favourite Colour: {contact.favouriteColour}
            <br />
            Gender: {contact.gender}
            <br />
            Email: {contact.email}
            <br />
            Job Title: {contact.jobTitle}
            <br />
            Latitude: {contact.latitude}
            <br />
            Longitude: {contact.longitude}
            <br />
            <img src={contact.profileImage}/>
            </h4>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </li>
  )
}

export default ContactView