import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactDetails() {

  const [contact, setContact] = useState({})
  
  const {id} = useParams()
  console.log(id, "inside ContactDetails")

  const fetchContact = () => {
    const username = "AllyDouillette"
    const baseURL= `https://boolean-api-server.fly.dev/${username}`
    const endpoint = `/contact/${id}`
    
    fetch(baseURL + endpoint)
      .then(res => res.json()) 
      .then(data => { console.log (data), 
        (setContact(data))})
  }

  useEffect(
    fetchContact
  , [])

  return (
    <div className="contactCard">
      <h2>{contact.lastName + ", " + contact.firstName}</h2>
      <p>{contact.street}</p>
      <p>{contact.city}</p>
    </div>
  )
}